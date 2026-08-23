import React from 'react';
const LABEL_395 = 'component_395';
export function Component395({ value = 395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_395, 'data-value': derived.doubled }, children);
}
export default Component395;
