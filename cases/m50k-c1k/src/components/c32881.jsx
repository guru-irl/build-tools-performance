import React from 'react';
const LABEL_32881 = 'component_32881';
export function Component32881({ value = 32881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32881, 'data-value': derived.doubled }, children);
}
export default Component32881;
