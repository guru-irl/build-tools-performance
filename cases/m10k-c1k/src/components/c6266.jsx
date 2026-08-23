import React from 'react';
const LABEL_6266 = 'component_6266';
export function Component6266({ value = 6266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6266, 'data-value': derived.doubled }, children);
}
export default Component6266;
