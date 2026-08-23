import React from 'react';
const LABEL_13003 = 'component_13003';
export function Component13003({ value = 13003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13003, 'data-value': derived.doubled }, children);
}
export default Component13003;
