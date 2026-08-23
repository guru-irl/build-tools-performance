import React from 'react';
const LABEL_44831 = 'component_44831';
export function Component44831({ value = 44831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44831, 'data-value': derived.doubled }, children);
}
export default Component44831;
