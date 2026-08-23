import React from 'react';
const LABEL_16371 = 'component_16371';
export function Component16371({ value = 16371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16371, 'data-value': derived.doubled }, children);
}
export default Component16371;
