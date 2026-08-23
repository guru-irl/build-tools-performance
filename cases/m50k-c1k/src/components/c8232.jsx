import React from 'react';
const LABEL_8232 = 'component_8232';
export function Component8232({ value = 8232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8232, 'data-value': derived.doubled }, children);
}
export default Component8232;
