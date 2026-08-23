import React from 'react';
const LABEL_35337 = 'component_35337';
export function Component35337({ value = 35337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35337, 'data-value': derived.doubled }, children);
}
export default Component35337;
