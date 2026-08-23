import React from 'react';
const LABEL_16395 = 'component_16395';
export function Component16395({ value = 16395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16395, 'data-value': derived.doubled }, children);
}
export default Component16395;
