import React from 'react';
const LABEL_22699 = 'component_22699';
export function Component22699({ value = 22699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22699, 'data-value': derived.doubled }, children);
}
export default Component22699;
