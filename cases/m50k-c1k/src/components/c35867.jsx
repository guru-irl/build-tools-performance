import React from 'react';
const LABEL_35867 = 'component_35867';
export function Component35867({ value = 35867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35867, 'data-value': derived.doubled }, children);
}
export default Component35867;
