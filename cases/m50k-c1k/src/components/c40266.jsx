import React from 'react';
const LABEL_40266 = 'component_40266';
export function Component40266({ value = 40266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40266, 'data-value': derived.doubled }, children);
}
export default Component40266;
