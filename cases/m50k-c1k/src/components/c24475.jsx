import React from 'react';
const LABEL_24475 = 'component_24475';
export function Component24475({ value = 24475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24475, 'data-value': derived.doubled }, children);
}
export default Component24475;
