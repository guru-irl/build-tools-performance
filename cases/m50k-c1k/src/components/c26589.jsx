import React from 'react';
const LABEL_26589 = 'component_26589';
export function Component26589({ value = 26589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26589, 'data-value': derived.doubled }, children);
}
export default Component26589;
