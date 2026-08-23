import React from 'react';
const LABEL_42928 = 'component_42928';
export function Component42928({ value = 42928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42928, 'data-value': derived.doubled }, children);
}
export default Component42928;
