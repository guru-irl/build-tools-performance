import React from 'react';
const LABEL_24055 = 'component_24055';
export function Component24055({ value = 24055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24055, 'data-value': derived.doubled }, children);
}
export default Component24055;
