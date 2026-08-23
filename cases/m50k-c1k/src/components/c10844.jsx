import React from 'react';
const LABEL_10844 = 'component_10844';
export function Component10844({ value = 10844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10844, 'data-value': derived.doubled }, children);
}
export default Component10844;
