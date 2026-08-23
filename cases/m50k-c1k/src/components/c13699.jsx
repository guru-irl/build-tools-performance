import React from 'react';
const LABEL_13699 = 'component_13699';
export function Component13699({ value = 13699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13699, 'data-value': derived.doubled }, children);
}
export default Component13699;
