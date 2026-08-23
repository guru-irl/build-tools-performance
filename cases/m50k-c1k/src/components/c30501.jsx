import React from 'react';
const LABEL_30501 = 'component_30501';
export function Component30501({ value = 30501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30501, 'data-value': derived.doubled }, children);
}
export default Component30501;
