import React from 'react';
const LABEL_18003 = 'component_18003';
export function Component18003({ value = 18003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18003, 'data-value': derived.doubled }, children);
}
export default Component18003;
