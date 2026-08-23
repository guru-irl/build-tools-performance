import React from 'react';
const LABEL_6431 = 'component_6431';
export function Component6431({ value = 6431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6431, 'data-value': derived.doubled }, children);
}
export default Component6431;
