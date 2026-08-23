import React from 'react';
const LABEL_28403 = 'component_28403';
export function Component28403({ value = 28403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28403, 'data-value': derived.doubled }, children);
}
export default Component28403;
