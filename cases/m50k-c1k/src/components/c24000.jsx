import React from 'react';
const LABEL_24000 = 'component_24000';
export function Component24000({ value = 24000, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24000, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24000, 'data-value': derived.doubled }, children);
}
export default Component24000;
