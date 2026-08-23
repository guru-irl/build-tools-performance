import React from 'react';
const LABEL_12003 = 'component_12003';
export function Component12003({ value = 12003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12003, 'data-value': derived.doubled }, children);
}
export default Component12003;
