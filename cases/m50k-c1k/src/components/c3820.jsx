import React from 'react';
const LABEL_3820 = 'component_3820';
export function Component3820({ value = 3820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3820, 'data-value': derived.doubled }, children);
}
export default Component3820;
