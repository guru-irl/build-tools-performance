import React from 'react';
const LABEL_35375 = 'component_35375';
export function Component35375({ value = 35375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35375, 'data-value': derived.doubled }, children);
}
export default Component35375;
