import React from 'react';
const LABEL_24384 = 'component_24384';
export function Component24384({ value = 24384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24384, 'data-value': derived.doubled }, children);
}
export default Component24384;
