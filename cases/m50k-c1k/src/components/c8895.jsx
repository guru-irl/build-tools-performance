import React from 'react';
const LABEL_8895 = 'component_8895';
export function Component8895({ value = 8895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8895, 'data-value': derived.doubled }, children);
}
export default Component8895;
