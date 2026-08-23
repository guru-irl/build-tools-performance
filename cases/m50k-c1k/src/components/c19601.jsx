import React from 'react';
const LABEL_19601 = 'component_19601';
export function Component19601({ value = 19601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19601, 'data-value': derived.doubled }, children);
}
export default Component19601;
