import React from 'react';
const LABEL_16364 = 'component_16364';
export function Component16364({ value = 16364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16364, 'data-value': derived.doubled }, children);
}
export default Component16364;
