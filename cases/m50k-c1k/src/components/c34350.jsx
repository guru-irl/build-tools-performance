import React from 'react';
const LABEL_34350 = 'component_34350';
export function Component34350({ value = 34350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34350, 'data-value': derived.doubled }, children);
}
export default Component34350;
