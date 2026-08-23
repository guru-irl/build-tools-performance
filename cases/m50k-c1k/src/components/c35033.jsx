import React from 'react';
const LABEL_35033 = 'component_35033';
export function Component35033({ value = 35033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35033, 'data-value': derived.doubled }, children);
}
export default Component35033;
