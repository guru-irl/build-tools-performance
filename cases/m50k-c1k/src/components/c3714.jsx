import React from 'react';
const LABEL_3714 = 'component_3714';
export function Component3714({ value = 3714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3714, 'data-value': derived.doubled }, children);
}
export default Component3714;
