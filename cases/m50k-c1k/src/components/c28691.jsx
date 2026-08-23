import React from 'react';
const LABEL_28691 = 'component_28691';
export function Component28691({ value = 28691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28691, 'data-value': derived.doubled }, children);
}
export default Component28691;
