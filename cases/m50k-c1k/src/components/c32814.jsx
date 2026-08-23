import React from 'react';
const LABEL_32814 = 'component_32814';
export function Component32814({ value = 32814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32814, 'data-value': derived.doubled }, children);
}
export default Component32814;
