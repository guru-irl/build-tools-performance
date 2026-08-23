import React from 'react';
const LABEL_44215 = 'component_44215';
export function Component44215({ value = 44215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44215, 'data-value': derived.doubled }, children);
}
export default Component44215;
