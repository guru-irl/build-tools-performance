import React from 'react';
const LABEL_26944 = 'component_26944';
export function Component26944({ value = 26944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26944, 'data-value': derived.doubled }, children);
}
export default Component26944;
