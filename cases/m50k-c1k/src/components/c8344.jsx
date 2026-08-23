import React from 'react';
const LABEL_8344 = 'component_8344';
export function Component8344({ value = 8344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8344, 'data-value': derived.doubled }, children);
}
export default Component8344;
