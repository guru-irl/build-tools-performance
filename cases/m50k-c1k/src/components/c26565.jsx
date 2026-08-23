import React from 'react';
const LABEL_26565 = 'component_26565';
export function Component26565({ value = 26565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26565, 'data-value': derived.doubled }, children);
}
export default Component26565;
