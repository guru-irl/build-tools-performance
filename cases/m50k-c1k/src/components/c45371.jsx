import React from 'react';
const LABEL_45371 = 'component_45371';
export function Component45371({ value = 45371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45371, 'data-value': derived.doubled }, children);
}
export default Component45371;
