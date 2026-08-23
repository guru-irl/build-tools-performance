import React from 'react';
const LABEL_37740 = 'component_37740';
export function Component37740({ value = 37740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37740, 'data-value': derived.doubled }, children);
}
export default Component37740;
