import React from 'react';
const LABEL_16306 = 'component_16306';
export function Component16306({ value = 16306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16306, 'data-value': derived.doubled }, children);
}
export default Component16306;
