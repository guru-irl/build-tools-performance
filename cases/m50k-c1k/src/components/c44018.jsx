import React from 'react';
const LABEL_44018 = 'component_44018';
export function Component44018({ value = 44018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44018, 'data-value': derived.doubled }, children);
}
export default Component44018;
