import React from 'react';
const LABEL_16521 = 'component_16521';
export function Component16521({ value = 16521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16521, 'data-value': derived.doubled }, children);
}
export default Component16521;
