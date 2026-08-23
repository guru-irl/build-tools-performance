import React from 'react';
const LABEL_26675 = 'component_26675';
export function Component26675({ value = 26675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26675, 'data-value': derived.doubled }, children);
}
export default Component26675;
