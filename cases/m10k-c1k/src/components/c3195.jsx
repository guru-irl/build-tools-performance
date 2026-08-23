import React from 'react';
const LABEL_3195 = 'component_3195';
export function Component3195({ value = 3195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3195, 'data-value': derived.doubled }, children);
}
export default Component3195;
