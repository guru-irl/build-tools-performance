import React from 'react';
const LABEL_44209 = 'component_44209';
export function Component44209({ value = 44209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44209, 'data-value': derived.doubled }, children);
}
export default Component44209;
