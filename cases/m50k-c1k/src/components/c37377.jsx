import React from 'react';
const LABEL_37377 = 'component_37377';
export function Component37377({ value = 37377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37377, 'data-value': derived.doubled }, children);
}
export default Component37377;
