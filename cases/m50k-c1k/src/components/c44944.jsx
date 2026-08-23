import React from 'react';
const LABEL_44944 = 'component_44944';
export function Component44944({ value = 44944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44944, 'data-value': derived.doubled }, children);
}
export default Component44944;
