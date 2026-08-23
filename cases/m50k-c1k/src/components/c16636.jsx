import React from 'react';
const LABEL_16636 = 'component_16636';
export function Component16636({ value = 16636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16636, 'data-value': derived.doubled }, children);
}
export default Component16636;
