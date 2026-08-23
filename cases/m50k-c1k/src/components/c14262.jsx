import React from 'react';
const LABEL_14262 = 'component_14262';
export function Component14262({ value = 14262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14262, 'data-value': derived.doubled }, children);
}
export default Component14262;
