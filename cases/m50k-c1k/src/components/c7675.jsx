import React from 'react';
const LABEL_7675 = 'component_7675';
export function Component7675({ value = 7675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7675, 'data-value': derived.doubled }, children);
}
export default Component7675;
