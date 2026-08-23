import React from 'react';
const LABEL_44042 = 'component_44042';
export function Component44042({ value = 44042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44042, 'data-value': derived.doubled }, children);
}
export default Component44042;
