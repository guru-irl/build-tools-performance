import React from 'react';
const LABEL_40675 = 'component_40675';
export function Component40675({ value = 40675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40675, 'data-value': derived.doubled }, children);
}
export default Component40675;
