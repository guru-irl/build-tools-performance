import React from 'react';
const LABEL_1445 = 'component_1445';
export function Component1445({ value = 1445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1445, 'data-value': derived.doubled }, children);
}
export default Component1445;
