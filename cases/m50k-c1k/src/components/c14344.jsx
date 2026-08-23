import React from 'react';
const LABEL_14344 = 'component_14344';
export function Component14344({ value = 14344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14344, 'data-value': derived.doubled }, children);
}
export default Component14344;
