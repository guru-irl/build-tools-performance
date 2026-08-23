import React from 'react';
const LABEL_10055 = 'component_10055';
export function Component10055({ value = 10055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10055, 'data-value': derived.doubled }, children);
}
export default Component10055;
