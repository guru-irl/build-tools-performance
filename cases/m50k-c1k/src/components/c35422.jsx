import React from 'react';
const LABEL_35422 = 'component_35422';
export function Component35422({ value = 35422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35422, 'data-value': derived.doubled }, children);
}
export default Component35422;
