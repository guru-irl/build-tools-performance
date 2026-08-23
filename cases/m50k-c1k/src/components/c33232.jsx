import React from 'react';
const LABEL_33232 = 'component_33232';
export function Component33232({ value = 33232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33232, 'data-value': derived.doubled }, children);
}
export default Component33232;
