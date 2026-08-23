import React from 'react';
const LABEL_44266 = 'component_44266';
export function Component44266({ value = 44266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44266, 'data-value': derived.doubled }, children);
}
export default Component44266;
