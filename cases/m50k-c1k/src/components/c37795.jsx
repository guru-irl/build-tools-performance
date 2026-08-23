import React from 'react';
const LABEL_37795 = 'component_37795';
export function Component37795({ value = 37795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37795, 'data-value': derived.doubled }, children);
}
export default Component37795;
