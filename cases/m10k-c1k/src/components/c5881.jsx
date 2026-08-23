import React from 'react';
const LABEL_5881 = 'component_5881';
export function Component5881({ value = 5881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5881, 'data-value': derived.doubled }, children);
}
export default Component5881;
