import React from 'react';
const LABEL_34403 = 'component_34403';
export function Component34403({ value = 34403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34403, 'data-value': derived.doubled }, children);
}
export default Component34403;
