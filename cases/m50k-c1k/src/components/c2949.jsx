import React from 'react';
const LABEL_2949 = 'component_2949';
export function Component2949({ value = 2949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2949, 'data-value': derived.doubled }, children);
}
export default Component2949;
