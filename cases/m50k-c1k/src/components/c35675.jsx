import React from 'react';
const LABEL_35675 = 'component_35675';
export function Component35675({ value = 35675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35675, 'data-value': derived.doubled }, children);
}
export default Component35675;
