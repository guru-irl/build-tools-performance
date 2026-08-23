import React from 'react';
const LABEL_1537 = 'component_1537';
export function Component1537({ value = 1537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1537, 'data-value': derived.doubled }, children);
}
export default Component1537;
