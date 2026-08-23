import React from 'react';
const LABEL_18265 = 'component_18265';
export function Component18265({ value = 18265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18265, 'data-value': derived.doubled }, children);
}
export default Component18265;
