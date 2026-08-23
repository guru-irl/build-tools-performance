import React from 'react';
const LABEL_16265 = 'component_16265';
export function Component16265({ value = 16265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16265, 'data-value': derived.doubled }, children);
}
export default Component16265;
