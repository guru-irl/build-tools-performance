import React from 'react';
const LABEL_33266 = 'component_33266';
export function Component33266({ value = 33266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33266, 'data-value': derived.doubled }, children);
}
export default Component33266;
