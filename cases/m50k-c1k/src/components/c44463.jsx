import React from 'react';
const LABEL_44463 = 'component_44463';
export function Component44463({ value = 44463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44463, 'data-value': derived.doubled }, children);
}
export default Component44463;
