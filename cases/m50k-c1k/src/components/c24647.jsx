import React from 'react';
const LABEL_24647 = 'component_24647';
export function Component24647({ value = 24647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24647, 'data-value': derived.doubled }, children);
}
export default Component24647;
