import React from 'react';
const LABEL_26266 = 'component_26266';
export function Component26266({ value = 26266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26266, 'data-value': derived.doubled }, children);
}
export default Component26266;
