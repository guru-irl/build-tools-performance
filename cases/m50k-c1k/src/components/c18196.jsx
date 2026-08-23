import React from 'react';
const LABEL_18196 = 'component_18196';
export function Component18196({ value = 18196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18196, 'data-value': derived.doubled }, children);
}
export default Component18196;
