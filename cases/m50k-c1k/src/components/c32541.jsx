import React from 'react';
const LABEL_32541 = 'component_32541';
export function Component32541({ value = 32541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32541, 'data-value': derived.doubled }, children);
}
export default Component32541;
