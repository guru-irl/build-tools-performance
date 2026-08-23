import React from 'react';
const LABEL_16809 = 'component_16809';
export function Component16809({ value = 16809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16809, 'data-value': derived.doubled }, children);
}
export default Component16809;
