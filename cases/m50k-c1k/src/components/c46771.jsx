import React from 'react';
const LABEL_46771 = 'component_46771';
export function Component46771({ value = 46771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46771, 'data-value': derived.doubled }, children);
}
export default Component46771;
