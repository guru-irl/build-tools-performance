import React from 'react';
const LABEL_44344 = 'component_44344';
export function Component44344({ value = 44344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44344, 'data-value': derived.doubled }, children);
}
export default Component44344;
