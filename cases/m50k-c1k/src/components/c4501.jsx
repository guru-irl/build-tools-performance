import React from 'react';
const LABEL_4501 = 'component_4501';
export function Component4501({ value = 4501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4501, 'data-value': derived.doubled }, children);
}
export default Component4501;
