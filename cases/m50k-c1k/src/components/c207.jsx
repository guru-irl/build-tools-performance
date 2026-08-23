import React from 'react';
const LABEL_207 = 'component_207';
export function Component207({ value = 207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_207, 'data-value': derived.doubled }, children);
}
export default Component207;
