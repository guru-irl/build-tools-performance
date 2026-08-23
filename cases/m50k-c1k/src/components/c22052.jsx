import React from 'react';
const LABEL_22052 = 'component_22052';
export function Component22052({ value = 22052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22052, 'data-value': derived.doubled }, children);
}
export default Component22052;
