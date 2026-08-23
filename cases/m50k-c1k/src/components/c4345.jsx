import React from 'react';
const LABEL_4345 = 'component_4345';
export function Component4345({ value = 4345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4345, 'data-value': derived.doubled }, children);
}
export default Component4345;
