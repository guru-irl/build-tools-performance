import React from 'react';
const LABEL_42842 = 'component_42842';
export function Component42842({ value = 42842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42842, 'data-value': derived.doubled }, children);
}
export default Component42842;
