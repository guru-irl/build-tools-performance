import React from 'react';
const LABEL_24563 = 'component_24563';
export function Component24563({ value = 24563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24563, 'data-value': derived.doubled }, children);
}
export default Component24563;
