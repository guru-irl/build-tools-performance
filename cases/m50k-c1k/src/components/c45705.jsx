import React from 'react';
const LABEL_45705 = 'component_45705';
export function Component45705({ value = 45705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45705, 'data-value': derived.doubled }, children);
}
export default Component45705;
