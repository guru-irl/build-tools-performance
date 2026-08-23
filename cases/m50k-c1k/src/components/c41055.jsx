import React from 'react';
const LABEL_41055 = 'component_41055';
export function Component41055({ value = 41055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41055, 'data-value': derived.doubled }, children);
}
export default Component41055;
