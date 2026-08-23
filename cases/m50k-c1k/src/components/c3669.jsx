import React from 'react';
const LABEL_3669 = 'component_3669';
export function Component3669({ value = 3669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3669, 'data-value': derived.doubled }, children);
}
export default Component3669;
