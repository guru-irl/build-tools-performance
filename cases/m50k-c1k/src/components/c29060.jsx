import React from 'react';
const LABEL_29060 = 'component_29060';
export function Component29060({ value = 29060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29060, 'data-value': derived.doubled }, children);
}
export default Component29060;
