import React from 'react';
const LABEL_39159 = 'component_39159';
export function Component39159({ value = 39159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39159, 'data-value': derived.doubled }, children);
}
export default Component39159;
