import React from 'react';
const LABEL_29009 = 'component_29009';
export function Component29009({ value = 29009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29009, 'data-value': derived.doubled }, children);
}
export default Component29009;
