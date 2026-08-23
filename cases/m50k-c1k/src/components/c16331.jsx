import React from 'react';
const LABEL_16331 = 'component_16331';
export function Component16331({ value = 16331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16331, 'data-value': derived.doubled }, children);
}
export default Component16331;
