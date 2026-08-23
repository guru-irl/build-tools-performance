import React from 'react';
const LABEL_35881 = 'component_35881';
export function Component35881({ value = 35881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35881, 'data-value': derived.doubled }, children);
}
export default Component35881;
