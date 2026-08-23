import React from 'react';
const LABEL_5570 = 'component_5570';
export function Component5570({ value = 5570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5570, 'data-value': derived.doubled }, children);
}
export default Component5570;
