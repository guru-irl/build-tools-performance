import React from 'react';
const LABEL_40056 = 'component_40056';
export function Component40056({ value = 40056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40056, 'data-value': derived.doubled }, children);
}
export default Component40056;
