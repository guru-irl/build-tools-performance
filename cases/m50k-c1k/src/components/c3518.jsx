import React from 'react';
const LABEL_3518 = 'component_3518';
export function Component3518({ value = 3518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3518, 'data-value': derived.doubled }, children);
}
export default Component3518;
