import React from 'react';
const LABEL_36487 = 'component_36487';
export function Component36487({ value = 36487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36487, 'data-value': derived.doubled }, children);
}
export default Component36487;
