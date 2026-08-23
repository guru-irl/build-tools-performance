import React from 'react';
const LABEL_24360 = 'component_24360';
export function Component24360({ value = 24360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24360, 'data-value': derived.doubled }, children);
}
export default Component24360;
