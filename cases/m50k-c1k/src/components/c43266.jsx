import React from 'react';
const LABEL_43266 = 'component_43266';
export function Component43266({ value = 43266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43266, 'data-value': derived.doubled }, children);
}
export default Component43266;
