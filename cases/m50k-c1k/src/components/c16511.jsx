import React from 'react';
const LABEL_16511 = 'component_16511';
export function Component16511({ value = 16511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16511, 'data-value': derived.doubled }, children);
}
export default Component16511;
