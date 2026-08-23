import React from 'react';
const LABEL_37570 = 'component_37570';
export function Component37570({ value = 37570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37570, 'data-value': derived.doubled }, children);
}
export default Component37570;
