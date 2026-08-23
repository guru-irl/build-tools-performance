import React from 'react';
const LABEL_16943 = 'component_16943';
export function Component16943({ value = 16943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16943, 'data-value': derived.doubled }, children);
}
export default Component16943;
