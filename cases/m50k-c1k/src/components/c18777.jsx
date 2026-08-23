import React from 'react';
const LABEL_18777 = 'component_18777';
export function Component18777({ value = 18777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18777, 'data-value': derived.doubled }, children);
}
export default Component18777;
