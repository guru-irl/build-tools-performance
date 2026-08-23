import React from 'react';
const LABEL_40158 = 'component_40158';
export function Component40158({ value = 40158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40158, 'data-value': derived.doubled }, children);
}
export default Component40158;
