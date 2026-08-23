import React from 'react';
const LABEL_35112 = 'component_35112';
export function Component35112({ value = 35112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35112, 'data-value': derived.doubled }, children);
}
export default Component35112;
