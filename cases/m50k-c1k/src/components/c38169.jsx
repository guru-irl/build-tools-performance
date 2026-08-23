import React from 'react';
const LABEL_38169 = 'component_38169';
export function Component38169({ value = 38169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38169, 'data-value': derived.doubled }, children);
}
export default Component38169;
