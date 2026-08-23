import React from 'react';
const LABEL_22867 = 'component_22867';
export function Component22867({ value = 22867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22867, 'data-value': derived.doubled }, children);
}
export default Component22867;
