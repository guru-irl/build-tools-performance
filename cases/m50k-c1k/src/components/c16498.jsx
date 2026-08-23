import React from 'react';
const LABEL_16498 = 'component_16498';
export function Component16498({ value = 16498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16498, 'data-value': derived.doubled }, children);
}
export default Component16498;
