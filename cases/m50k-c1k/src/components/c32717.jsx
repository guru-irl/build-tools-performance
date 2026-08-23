import React from 'react';
const LABEL_32717 = 'component_32717';
export function Component32717({ value = 32717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32717, 'data-value': derived.doubled }, children);
}
export default Component32717;
