import React from 'react';
const LABEL_18468 = 'component_18468';
export function Component18468({ value = 18468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18468, 'data-value': derived.doubled }, children);
}
export default Component18468;
