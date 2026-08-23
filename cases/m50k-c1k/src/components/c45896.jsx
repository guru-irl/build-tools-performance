import React from 'react';
const LABEL_45896 = 'component_45896';
export function Component45896({ value = 45896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45896, 'data-value': derived.doubled }, children);
}
export default Component45896;
