import React from 'react';
const LABEL_419 = 'component_419';
export function Component419({ value = 419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_419, 'data-value': derived.doubled }, children);
}
export default Component419;
