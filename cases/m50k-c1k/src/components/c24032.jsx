import React from 'react';
const LABEL_24032 = 'component_24032';
export function Component24032({ value = 24032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24032, 'data-value': derived.doubled }, children);
}
export default Component24032;
