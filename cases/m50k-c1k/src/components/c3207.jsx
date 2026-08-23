import React from 'react';
const LABEL_3207 = 'component_3207';
export function Component3207({ value = 3207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3207, 'data-value': derived.doubled }, children);
}
export default Component3207;
