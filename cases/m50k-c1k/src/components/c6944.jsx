import React from 'react';
const LABEL_6944 = 'component_6944';
export function Component6944({ value = 6944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6944, 'data-value': derived.doubled }, children);
}
export default Component6944;
