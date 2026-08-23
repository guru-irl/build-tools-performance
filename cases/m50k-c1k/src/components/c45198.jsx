import React from 'react';
const LABEL_45198 = 'component_45198';
export function Component45198({ value = 45198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45198, 'data-value': derived.doubled }, children);
}
export default Component45198;
