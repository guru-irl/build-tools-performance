import React from 'react';
const LABEL_19120 = 'component_19120';
export function Component19120({ value = 19120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19120, 'data-value': derived.doubled }, children);
}
export default Component19120;
