import React from 'react';
const LABEL_22431 = 'component_22431';
export function Component22431({ value = 22431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22431, 'data-value': derived.doubled }, children);
}
export default Component22431;
