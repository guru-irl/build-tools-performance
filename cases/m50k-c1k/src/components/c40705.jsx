import React from 'react';
const LABEL_40705 = 'component_40705';
export function Component40705({ value = 40705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40705, 'data-value': derived.doubled }, children);
}
export default Component40705;
