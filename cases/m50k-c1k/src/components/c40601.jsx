import React from 'react';
const LABEL_40601 = 'component_40601';
export function Component40601({ value = 40601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40601, 'data-value': derived.doubled }, children);
}
export default Component40601;
