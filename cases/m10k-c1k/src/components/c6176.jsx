import React from 'react';
const LABEL_6176 = 'component_6176';
export function Component6176({ value = 6176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6176, 'data-value': derived.doubled }, children);
}
export default Component6176;
