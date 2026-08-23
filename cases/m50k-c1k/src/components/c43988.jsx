import React from 'react';
const LABEL_43988 = 'component_43988';
export function Component43988({ value = 43988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43988, 'data-value': derived.doubled }, children);
}
export default Component43988;
