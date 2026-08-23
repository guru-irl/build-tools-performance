import React from 'react';
const LABEL_11933 = 'component_11933';
export function Component11933({ value = 11933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11933, 'data-value': derived.doubled }, children);
}
export default Component11933;
