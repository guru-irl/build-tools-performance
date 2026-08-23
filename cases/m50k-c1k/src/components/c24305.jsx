import React from 'react';
const LABEL_24305 = 'component_24305';
export function Component24305({ value = 24305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24305, 'data-value': derived.doubled }, children);
}
export default Component24305;
