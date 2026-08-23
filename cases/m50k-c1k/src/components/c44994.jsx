import React from 'react';
const LABEL_44994 = 'component_44994';
export function Component44994({ value = 44994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44994, 'data-value': derived.doubled }, children);
}
export default Component44994;
