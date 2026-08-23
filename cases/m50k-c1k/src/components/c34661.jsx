import React from 'react';
const LABEL_34661 = 'component_34661';
export function Component34661({ value = 34661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34661, 'data-value': derived.doubled }, children);
}
export default Component34661;
