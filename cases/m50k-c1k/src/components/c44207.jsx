import React from 'react';
const LABEL_44207 = 'component_44207';
export function Component44207({ value = 44207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44207, 'data-value': derived.doubled }, children);
}
export default Component44207;
