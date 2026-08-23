import React from 'react';
const LABEL_18849 = 'component_18849';
export function Component18849({ value = 18849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18849, 'data-value': derived.doubled }, children);
}
export default Component18849;
