import React from 'react';
const LABEL_43662 = 'component_43662';
export function Component43662({ value = 43662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43662, 'data-value': derived.doubled }, children);
}
export default Component43662;
