import React from 'react';
const LABEL_3842 = 'component_3842';
export function Component3842({ value = 3842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3842, 'data-value': derived.doubled }, children);
}
export default Component3842;
