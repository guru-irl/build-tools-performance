import React from 'react';
const LABEL_24675 = 'component_24675';
export function Component24675({ value = 24675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24675, 'data-value': derived.doubled }, children);
}
export default Component24675;
