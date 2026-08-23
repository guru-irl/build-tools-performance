import React from 'react';
const LABEL_37623 = 'component_37623';
export function Component37623({ value = 37623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37623, 'data-value': derived.doubled }, children);
}
export default Component37623;
