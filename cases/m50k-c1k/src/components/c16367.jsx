import React from 'react';
const LABEL_16367 = 'component_16367';
export function Component16367({ value = 16367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16367, 'data-value': derived.doubled }, children);
}
export default Component16367;
