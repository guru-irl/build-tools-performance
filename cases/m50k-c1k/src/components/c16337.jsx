import React from 'react';
const LABEL_16337 = 'component_16337';
export function Component16337({ value = 16337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16337, 'data-value': derived.doubled }, children);
}
export default Component16337;
