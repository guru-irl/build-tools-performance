import React from 'react';
const LABEL_20395 = 'component_20395';
export function Component20395({ value = 20395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20395, 'data-value': derived.doubled }, children);
}
export default Component20395;
