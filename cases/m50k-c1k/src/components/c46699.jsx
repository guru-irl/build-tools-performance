import React from 'react';
const LABEL_46699 = 'component_46699';
export function Component46699({ value = 46699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46699, 'data-value': derived.doubled }, children);
}
export default Component46699;
