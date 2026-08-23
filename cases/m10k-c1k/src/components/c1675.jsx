import React from 'react';
const LABEL_1675 = 'component_1675';
export function Component1675({ value = 1675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1675, 'data-value': derived.doubled }, children);
}
export default Component1675;
