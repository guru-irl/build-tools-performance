import React from 'react';
const LABEL_3130 = 'component_3130';
export function Component3130({ value = 3130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3130, 'data-value': derived.doubled }, children);
}
export default Component3130;
