import React from 'react';
const LABEL_18699 = 'component_18699';
export function Component18699({ value = 18699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18699, 'data-value': derived.doubled }, children);
}
export default Component18699;
