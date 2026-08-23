import React from 'react';
const LABEL_12675 = 'component_12675';
export function Component12675({ value = 12675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12675, 'data-value': derived.doubled }, children);
}
export default Component12675;
