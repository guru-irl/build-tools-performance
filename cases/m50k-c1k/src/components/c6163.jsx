import React from 'react';
const LABEL_6163 = 'component_6163';
export function Component6163({ value = 6163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6163, 'data-value': derived.doubled }, children);
}
export default Component6163;
