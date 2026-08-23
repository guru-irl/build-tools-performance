import React from 'react';
const LABEL_36707 = 'component_36707';
export function Component36707({ value = 36707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36707, 'data-value': derived.doubled }, children);
}
export default Component36707;
