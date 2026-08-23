import React from 'react';
const LABEL_45945 = 'component_45945';
export function Component45945({ value = 45945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45945, 'data-value': derived.doubled }, children);
}
export default Component45945;
