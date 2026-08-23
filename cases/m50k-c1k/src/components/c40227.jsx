import React from 'react';
const LABEL_40227 = 'component_40227';
export function Component40227({ value = 40227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40227, 'data-value': derived.doubled }, children);
}
export default Component40227;
