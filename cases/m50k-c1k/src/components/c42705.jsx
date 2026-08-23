import React from 'react';
const LABEL_42705 = 'component_42705';
export function Component42705({ value = 42705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42705, 'data-value': derived.doubled }, children);
}
export default Component42705;
