import React from 'react';
const LABEL_2299 = 'component_2299';
export function Component2299({ value = 2299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2299, 'data-value': derived.doubled }, children);
}
export default Component2299;
