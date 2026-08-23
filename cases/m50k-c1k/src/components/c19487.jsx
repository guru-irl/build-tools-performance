import React from 'react';
const LABEL_19487 = 'component_19487';
export function Component19487({ value = 19487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19487, 'data-value': derived.doubled }, children);
}
export default Component19487;
