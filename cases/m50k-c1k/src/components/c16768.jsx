import React from 'react';
const LABEL_16768 = 'component_16768';
export function Component16768({ value = 16768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16768, 'data-value': derived.doubled }, children);
}
export default Component16768;
