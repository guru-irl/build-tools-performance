import React from 'react';
const LABEL_21244 = 'component_21244';
export function Component21244({ value = 21244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21244, 'data-value': derived.doubled }, children);
}
export default Component21244;
