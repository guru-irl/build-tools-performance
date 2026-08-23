import React from 'react';
const LABEL_44735 = 'component_44735';
export function Component44735({ value = 44735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44735, 'data-value': derived.doubled }, children);
}
export default Component44735;
