import React from 'react';
const LABEL_23052 = 'component_23052';
export function Component23052({ value = 23052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23052, 'data-value': derived.doubled }, children);
}
export default Component23052;
