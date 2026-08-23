import React from 'react';
const LABEL_5675 = 'component_5675';
export function Component5675({ value = 5675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5675, 'data-value': derived.doubled }, children);
}
export default Component5675;
