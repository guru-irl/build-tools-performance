import React from 'react';
const LABEL_37575 = 'component_37575';
export function Component37575({ value = 37575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37575, 'data-value': derived.doubled }, children);
}
export default Component37575;
