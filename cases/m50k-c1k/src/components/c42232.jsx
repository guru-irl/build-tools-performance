import React from 'react';
const LABEL_42232 = 'component_42232';
export function Component42232({ value = 42232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42232, 'data-value': derived.doubled }, children);
}
export default Component42232;
