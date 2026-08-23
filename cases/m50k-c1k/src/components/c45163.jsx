import React from 'react';
const LABEL_45163 = 'component_45163';
export function Component45163({ value = 45163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45163, 'data-value': derived.doubled }, children);
}
export default Component45163;
