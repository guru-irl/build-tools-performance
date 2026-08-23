import React from 'react';
const LABEL_21420 = 'component_21420';
export function Component21420({ value = 21420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21420, 'data-value': derived.doubled }, children);
}
export default Component21420;
