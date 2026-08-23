import React from 'react';
const LABEL_8395 = 'component_8395';
export function Component8395({ value = 8395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8395, 'data-value': derived.doubled }, children);
}
export default Component8395;
