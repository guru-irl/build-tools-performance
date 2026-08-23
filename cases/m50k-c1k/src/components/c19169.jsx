import React from 'react';
const LABEL_19169 = 'component_19169';
export function Component19169({ value = 19169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19169, 'data-value': derived.doubled }, children);
}
export default Component19169;
