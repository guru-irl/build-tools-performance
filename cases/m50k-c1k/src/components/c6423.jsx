import React from 'react';
const LABEL_6423 = 'component_6423';
export function Component6423({ value = 6423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6423, 'data-value': derived.doubled }, children);
}
export default Component6423;
