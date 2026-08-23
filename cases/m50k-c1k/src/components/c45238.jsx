import React from 'react';
const LABEL_45238 = 'component_45238';
export function Component45238({ value = 45238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45238, 'data-value': derived.doubled }, children);
}
export default Component45238;
