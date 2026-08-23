import React from 'react';
const LABEL_24181 = 'component_24181';
export function Component24181({ value = 24181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24181, 'data-value': derived.doubled }, children);
}
export default Component24181;
