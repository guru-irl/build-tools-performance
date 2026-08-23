import React from 'react';
const LABEL_28321 = 'component_28321';
export function Component28321({ value = 28321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28321, 'data-value': derived.doubled }, children);
}
export default Component28321;
