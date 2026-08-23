import React from 'react';
const LABEL_46158 = 'component_46158';
export function Component46158({ value = 46158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46158, 'data-value': derived.doubled }, children);
}
export default Component46158;
