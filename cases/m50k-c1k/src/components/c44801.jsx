import React from 'react';
const LABEL_44801 = 'component_44801';
export function Component44801({ value = 44801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44801, 'data-value': derived.doubled }, children);
}
export default Component44801;
