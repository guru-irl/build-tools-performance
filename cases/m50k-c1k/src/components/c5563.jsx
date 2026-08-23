import React from 'react';
const LABEL_5563 = 'component_5563';
export function Component5563({ value = 5563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5563, 'data-value': derived.doubled }, children);
}
export default Component5563;
