import React from 'react';
const LABEL_6466 = 'component_6466';
export function Component6466({ value = 6466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6466, 'data-value': derived.doubled }, children);
}
export default Component6466;
