import React from 'react';
const LABEL_45267 = 'component_45267';
export function Component45267({ value = 45267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45267, 'data-value': derived.doubled }, children);
}
export default Component45267;
