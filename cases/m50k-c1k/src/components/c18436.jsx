import React from 'react';
const LABEL_18436 = 'component_18436';
export function Component18436({ value = 18436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18436, 'data-value': derived.doubled }, children);
}
export default Component18436;
