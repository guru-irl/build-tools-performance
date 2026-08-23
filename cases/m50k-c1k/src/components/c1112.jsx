import React from 'react';
const LABEL_1112 = 'component_1112';
export function Component1112({ value = 1112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1112, 'data-value': derived.doubled }, children);
}
export default Component1112;
