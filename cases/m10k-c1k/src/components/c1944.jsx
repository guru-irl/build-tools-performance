import React from 'react';
const LABEL_1944 = 'component_1944';
export function Component1944({ value = 1944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1944, 'data-value': derived.doubled }, children);
}
export default Component1944;
