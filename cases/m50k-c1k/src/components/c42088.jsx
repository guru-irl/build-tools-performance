import React from 'react';
const LABEL_42088 = 'component_42088';
export function Component42088({ value = 42088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42088, 'data-value': derived.doubled }, children);
}
export default Component42088;
