import React from 'react';
const LABEL_32930 = 'component_32930';
export function Component32930({ value = 32930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32930, 'data-value': derived.doubled }, children);
}
export default Component32930;
