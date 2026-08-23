import React from 'react';
const LABEL_18501 = 'component_18501';
export function Component18501({ value = 18501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18501, 'data-value': derived.doubled }, children);
}
export default Component18501;
