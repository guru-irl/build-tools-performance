import React from 'react';
const LABEL_16772 = 'component_16772';
export function Component16772({ value = 16772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16772, 'data-value': derived.doubled }, children);
}
export default Component16772;
