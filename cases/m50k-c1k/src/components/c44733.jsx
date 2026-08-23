import React from 'react';
const LABEL_44733 = 'component_44733';
export function Component44733({ value = 44733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44733, 'data-value': derived.doubled }, children);
}
export default Component44733;
