import React from 'react';
const LABEL_44340 = 'component_44340';
export function Component44340({ value = 44340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44340, 'data-value': derived.doubled }, children);
}
export default Component44340;
