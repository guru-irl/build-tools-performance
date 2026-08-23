import React from 'react';
const LABEL_8172 = 'component_8172';
export function Component8172({ value = 8172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8172, 'data-value': derived.doubled }, children);
}
export default Component8172;
