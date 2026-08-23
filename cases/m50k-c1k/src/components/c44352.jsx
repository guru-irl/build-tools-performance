import React from 'react';
const LABEL_44352 = 'component_44352';
export function Component44352({ value = 44352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44352, 'data-value': derived.doubled }, children);
}
export default Component44352;
