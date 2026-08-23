import React from 'react';
const LABEL_6669 = 'component_6669';
export function Component6669({ value = 6669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6669, 'data-value': derived.doubled }, children);
}
export default Component6669;
