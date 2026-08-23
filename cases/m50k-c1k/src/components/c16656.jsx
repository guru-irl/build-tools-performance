import React from 'react';
const LABEL_16656 = 'component_16656';
export function Component16656({ value = 16656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16656, 'data-value': derived.doubled }, children);
}
export default Component16656;
