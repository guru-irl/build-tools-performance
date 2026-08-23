import React from 'react';
const LABEL_46881 = 'component_46881';
export function Component46881({ value = 46881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46881, 'data-value': derived.doubled }, children);
}
export default Component46881;
