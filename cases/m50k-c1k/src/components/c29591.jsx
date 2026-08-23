import React from 'react';
const LABEL_29591 = 'component_29591';
export function Component29591({ value = 29591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29591, 'data-value': derived.doubled }, children);
}
export default Component29591;
