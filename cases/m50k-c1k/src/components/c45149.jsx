import React from 'react';
const LABEL_45149 = 'component_45149';
export function Component45149({ value = 45149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45149, 'data-value': derived.doubled }, children);
}
export default Component45149;
