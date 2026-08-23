import React from 'react';
const LABEL_38466 = 'component_38466';
export function Component38466({ value = 38466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38466, 'data-value': derived.doubled }, children);
}
export default Component38466;
