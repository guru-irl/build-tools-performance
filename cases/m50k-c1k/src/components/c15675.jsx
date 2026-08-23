import React from 'react';
const LABEL_15675 = 'component_15675';
export function Component15675({ value = 15675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15675, 'data-value': derived.doubled }, children);
}
export default Component15675;
