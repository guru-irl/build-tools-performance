import React from 'react';
const LABEL_25988 = 'component_25988';
export function Component25988({ value = 25988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25988, 'data-value': derived.doubled }, children);
}
export default Component25988;
