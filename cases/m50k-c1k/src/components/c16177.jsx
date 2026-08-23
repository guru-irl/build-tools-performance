import React from 'react';
const LABEL_16177 = 'component_16177';
export function Component16177({ value = 16177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16177, 'data-value': derived.doubled }, children);
}
export default Component16177;
