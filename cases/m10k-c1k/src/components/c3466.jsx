import React from 'react';
const LABEL_3466 = 'component_3466';
export function Component3466({ value = 3466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3466, 'data-value': derived.doubled }, children);
}
export default Component3466;
