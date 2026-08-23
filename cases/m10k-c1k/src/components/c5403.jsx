import React from 'react';
const LABEL_5403 = 'component_5403';
export function Component5403({ value = 5403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5403, 'data-value': derived.doubled }, children);
}
export default Component5403;
