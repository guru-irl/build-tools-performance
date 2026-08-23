import React from 'react';
const LABEL_41975 = 'component_41975';
export function Component41975({ value = 41975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41975, 'data-value': derived.doubled }, children);
}
export default Component41975;
