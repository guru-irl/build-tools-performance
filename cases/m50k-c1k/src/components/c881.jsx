import React from 'react';
const LABEL_881 = 'component_881';
export function Component881({ value = 881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_881, 'data-value': derived.doubled }, children);
}
export default Component881;
