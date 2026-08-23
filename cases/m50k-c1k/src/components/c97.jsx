import React from 'react';
const LABEL_97 = 'component_97';
export function Component97({ value = 97, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_97, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_97, 'data-value': derived.doubled }, children);
}
export default Component97;
