import React from 'react';
const LABEL_17086 = 'component_17086';
export function Component17086({ value = 17086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17086, 'data-value': derived.doubled }, children);
}
export default Component17086;
