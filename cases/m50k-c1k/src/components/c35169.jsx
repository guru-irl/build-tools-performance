import React from 'react';
const LABEL_35169 = 'component_35169';
export function Component35169({ value = 35169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35169, 'data-value': derived.doubled }, children);
}
export default Component35169;
