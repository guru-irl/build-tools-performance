import React from 'react';
const LABEL_265 = 'component_265';
export function Component265({ value = 265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_265, 'data-value': derived.doubled }, children);
}
export default Component265;
