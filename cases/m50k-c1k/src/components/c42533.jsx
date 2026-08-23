import React from 'react';
const LABEL_42533 = 'component_42533';
export function Component42533({ value = 42533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42533, 'data-value': derived.doubled }, children);
}
export default Component42533;
