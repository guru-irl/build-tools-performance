import React from 'react';
const LABEL_44325 = 'component_44325';
export function Component44325({ value = 44325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44325, 'data-value': derived.doubled }, children);
}
export default Component44325;
