import React from 'react';
const LABEL_16225 = 'component_16225';
export function Component16225({ value = 16225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16225, 'data-value': derived.doubled }, children);
}
export default Component16225;
