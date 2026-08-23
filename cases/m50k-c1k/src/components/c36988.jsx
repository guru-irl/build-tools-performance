import React from 'react';
const LABEL_36988 = 'component_36988';
export function Component36988({ value = 36988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36988, 'data-value': derived.doubled }, children);
}
export default Component36988;
