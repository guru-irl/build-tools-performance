import React from 'react';
const LABEL_24580 = 'component_24580';
export function Component24580({ value = 24580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24580, 'data-value': derived.doubled }, children);
}
export default Component24580;
