import React from 'react';
const LABEL_4232 = 'component_4232';
export function Component4232({ value = 4232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4232, 'data-value': derived.doubled }, children);
}
export default Component4232;
