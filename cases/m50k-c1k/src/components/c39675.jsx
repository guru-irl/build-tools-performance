import React from 'react';
const LABEL_39675 = 'component_39675';
export function Component39675({ value = 39675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39675, 'data-value': derived.doubled }, children);
}
export default Component39675;
