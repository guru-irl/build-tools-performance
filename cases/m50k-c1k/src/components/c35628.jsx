import React from 'react';
const LABEL_35628 = 'component_35628';
export function Component35628({ value = 35628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35628, 'data-value': derived.doubled }, children);
}
export default Component35628;
