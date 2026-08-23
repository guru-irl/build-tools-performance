import React from 'react';
const LABEL_31628 = 'component_31628';
export function Component31628({ value = 31628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31628, 'data-value': derived.doubled }, children);
}
export default Component31628;
