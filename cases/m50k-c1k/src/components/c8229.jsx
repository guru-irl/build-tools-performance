import React from 'react';
const LABEL_8229 = 'component_8229';
export function Component8229({ value = 8229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8229, 'data-value': derived.doubled }, children);
}
export default Component8229;
