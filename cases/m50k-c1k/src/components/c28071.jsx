import React from 'react';
const LABEL_28071 = 'component_28071';
export function Component28071({ value = 28071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28071, 'data-value': derived.doubled }, children);
}
export default Component28071;
