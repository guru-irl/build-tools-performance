import React from 'react';
const LABEL_40232 = 'component_40232';
export function Component40232({ value = 40232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40232, 'data-value': derived.doubled }, children);
}
export default Component40232;
