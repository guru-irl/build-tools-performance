import React from 'react';
const LABEL_3728 = 'component_3728';
export function Component3728({ value = 3728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3728, 'data-value': derived.doubled }, children);
}
export default Component3728;
