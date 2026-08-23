import React from 'react';
const LABEL_13207 = 'component_13207';
export function Component13207({ value = 13207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13207, 'data-value': derived.doubled }, children);
}
export default Component13207;
