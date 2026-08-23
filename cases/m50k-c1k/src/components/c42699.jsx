import React from 'react';
const LABEL_42699 = 'component_42699';
export function Component42699({ value = 42699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42699, 'data-value': derived.doubled }, children);
}
export default Component42699;
