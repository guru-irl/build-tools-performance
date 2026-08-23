import React from 'react';
const LABEL_42975 = 'component_42975';
export function Component42975({ value = 42975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42975, 'data-value': derived.doubled }, children);
}
export default Component42975;
