import React from 'react';
const LABEL_36242 = 'component_36242';
export function Component36242({ value = 36242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36242, 'data-value': derived.doubled }, children);
}
export default Component36242;
