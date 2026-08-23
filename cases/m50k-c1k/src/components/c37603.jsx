import React from 'react';
const LABEL_37603 = 'component_37603';
export function Component37603({ value = 37603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37603, 'data-value': derived.doubled }, children);
}
export default Component37603;
