import React from 'react';
const LABEL_35365 = 'component_35365';
export function Component35365({ value = 35365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35365, 'data-value': derived.doubled }, children);
}
export default Component35365;
