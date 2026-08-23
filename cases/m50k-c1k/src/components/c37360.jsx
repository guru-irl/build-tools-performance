import React from 'react';
const LABEL_37360 = 'component_37360';
export function Component37360({ value = 37360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37360, 'data-value': derived.doubled }, children);
}
export default Component37360;
