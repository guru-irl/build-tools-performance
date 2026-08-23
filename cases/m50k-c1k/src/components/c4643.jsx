import React from 'react';
const LABEL_4643 = 'component_4643';
export function Component4643({ value = 4643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4643, 'data-value': derived.doubled }, children);
}
export default Component4643;
