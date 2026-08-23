import React from 'react';
const LABEL_46603 = 'component_46603';
export function Component46603({ value = 46603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46603, 'data-value': derived.doubled }, children);
}
export default Component46603;
