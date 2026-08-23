import React from 'react';
const LABEL_16172 = 'component_16172';
export function Component16172({ value = 16172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16172, 'data-value': derived.doubled }, children);
}
export default Component16172;
