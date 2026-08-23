import React from 'react';
const LABEL_46441 = 'component_46441';
export function Component46441({ value = 46441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46441, 'data-value': derived.doubled }, children);
}
export default Component46441;
