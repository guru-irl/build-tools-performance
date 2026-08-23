import React from 'react';
const LABEL_4395 = 'component_4395';
export function Component4395({ value = 4395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4395, 'data-value': derived.doubled }, children);
}
export default Component4395;
