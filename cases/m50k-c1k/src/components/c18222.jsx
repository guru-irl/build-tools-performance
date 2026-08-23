import React from 'react';
const LABEL_18222 = 'component_18222';
export function Component18222({ value = 18222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18222, 'data-value': derived.doubled }, children);
}
export default Component18222;
