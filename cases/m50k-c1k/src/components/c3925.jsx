import React from 'react';
const LABEL_3925 = 'component_3925';
export function Component3925({ value = 3925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3925, 'data-value': derived.doubled }, children);
}
export default Component3925;
