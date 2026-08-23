import React from 'react';
const LABEL_23420 = 'component_23420';
export function Component23420({ value = 23420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23420, 'data-value': derived.doubled }, children);
}
export default Component23420;
