import React from 'react';
const LABEL_44239 = 'component_44239';
export function Component44239({ value = 44239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44239, 'data-value': derived.doubled }, children);
}
export default Component44239;
