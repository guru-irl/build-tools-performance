import React from 'react';
const LABEL_16695 = 'component_16695';
export function Component16695({ value = 16695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16695, 'data-value': derived.doubled }, children);
}
export default Component16695;
