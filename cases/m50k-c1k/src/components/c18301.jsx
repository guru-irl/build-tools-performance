import React from 'react';
const LABEL_18301 = 'component_18301';
export function Component18301({ value = 18301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18301, 'data-value': derived.doubled }, children);
}
export default Component18301;
