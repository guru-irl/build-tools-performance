import React from 'react';
const LABEL_17052 = 'component_17052';
export function Component17052({ value = 17052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17052, 'data-value': derived.doubled }, children);
}
export default Component17052;
