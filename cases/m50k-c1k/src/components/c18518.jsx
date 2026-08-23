import React from 'react';
const LABEL_18518 = 'component_18518';
export function Component18518({ value = 18518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18518, 'data-value': derived.doubled }, children);
}
export default Component18518;
