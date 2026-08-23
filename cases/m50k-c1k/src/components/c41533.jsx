import React from 'react';
const LABEL_41533 = 'component_41533';
export function Component41533({ value = 41533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41533, 'data-value': derived.doubled }, children);
}
export default Component41533;
