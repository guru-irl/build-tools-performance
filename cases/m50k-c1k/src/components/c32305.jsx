import React from 'react';
const LABEL_32305 = 'component_32305';
export function Component32305({ value = 32305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32305, 'data-value': derived.doubled }, children);
}
export default Component32305;
