import React from 'react';
const LABEL_26493 = 'component_26493';
export function Component26493({ value = 26493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26493, 'data-value': derived.doubled }, children);
}
export default Component26493;
