import React from 'react';
const LABEL_18102 = 'component_18102';
export function Component18102({ value = 18102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18102, 'data-value': derived.doubled }, children);
}
export default Component18102;
