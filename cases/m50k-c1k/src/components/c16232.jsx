import React from 'react';
const LABEL_16232 = 'component_16232';
export function Component16232({ value = 16232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16232, 'data-value': derived.doubled }, children);
}
export default Component16232;
