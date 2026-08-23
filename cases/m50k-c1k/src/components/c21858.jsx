import React from 'react';
const LABEL_21858 = 'component_21858';
export function Component21858({ value = 21858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21858, 'data-value': derived.doubled }, children);
}
export default Component21858;
