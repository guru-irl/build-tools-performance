import React from 'react';
const LABEL_35635 = 'component_35635';
export function Component35635({ value = 35635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35635, 'data-value': derived.doubled }, children);
}
export default Component35635;
