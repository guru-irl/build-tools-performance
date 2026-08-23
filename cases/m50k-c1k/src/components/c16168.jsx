import React from 'react';
const LABEL_16168 = 'component_16168';
export function Component16168({ value = 16168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16168, 'data-value': derived.doubled }, children);
}
export default Component16168;
