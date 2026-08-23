import React from 'react';
const LABEL_20086 = 'component_20086';
export function Component20086({ value = 20086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20086, 'data-value': derived.doubled }, children);
}
export default Component20086;
