import React from 'react';
const LABEL_2052 = 'component_2052';
export function Component2052({ value = 2052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2052, 'data-value': derived.doubled }, children);
}
export default Component2052;
