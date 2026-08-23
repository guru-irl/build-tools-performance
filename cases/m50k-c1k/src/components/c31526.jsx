import React from 'react';
const LABEL_31526 = 'component_31526';
export function Component31526({ value = 31526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31526, 'data-value': derived.doubled }, children);
}
export default Component31526;
