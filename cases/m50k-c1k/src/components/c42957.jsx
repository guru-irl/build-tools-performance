import React from 'react';
const LABEL_42957 = 'component_42957';
export function Component42957({ value = 42957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42957, 'data-value': derived.doubled }, children);
}
export default Component42957;
