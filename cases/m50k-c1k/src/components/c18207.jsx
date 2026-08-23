import React from 'react';
const LABEL_18207 = 'component_18207';
export function Component18207({ value = 18207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18207, 'data-value': derived.doubled }, children);
}
export default Component18207;
