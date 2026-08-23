import React from 'react';
const LABEL_22585 = 'component_22585';
export function Component22585({ value = 22585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22585, 'data-value': derived.doubled }, children);
}
export default Component22585;
