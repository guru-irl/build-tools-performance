import React from 'react';
const LABEL_8945 = 'component_8945';
export function Component8945({ value = 8945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8945, 'data-value': derived.doubled }, children);
}
export default Component8945;
