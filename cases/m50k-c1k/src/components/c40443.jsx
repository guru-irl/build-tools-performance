import React from 'react';
const LABEL_40443 = 'component_40443';
export function Component40443({ value = 40443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40443, 'data-value': derived.doubled }, children);
}
export default Component40443;
