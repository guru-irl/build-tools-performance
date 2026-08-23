import React from 'react';
const LABEL_7661 = 'component_7661';
export function Component7661({ value = 7661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7661, 'data-value': derived.doubled }, children);
}
export default Component7661;
