import React from 'react';
const LABEL_2257 = 'component_2257';
export function Component2257({ value = 2257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2257, 'data-value': derived.doubled }, children);
}
export default Component2257;
