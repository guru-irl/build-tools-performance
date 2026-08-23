import React from 'react';
const LABEL_36675 = 'component_36675';
export function Component36675({ value = 36675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36675, 'data-value': derived.doubled }, children);
}
export default Component36675;
