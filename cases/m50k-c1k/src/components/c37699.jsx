import React from 'react';
const LABEL_37699 = 'component_37699';
export function Component37699({ value = 37699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37699, 'data-value': derived.doubled }, children);
}
export default Component37699;
