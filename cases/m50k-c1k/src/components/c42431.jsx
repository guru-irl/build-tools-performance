import React from 'react';
const LABEL_42431 = 'component_42431';
export function Component42431({ value = 42431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42431, 'data-value': derived.doubled }, children);
}
export default Component42431;
