import React from 'react';
const LABEL_32675 = 'component_32675';
export function Component32675({ value = 32675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32675, 'data-value': derived.doubled }, children);
}
export default Component32675;
