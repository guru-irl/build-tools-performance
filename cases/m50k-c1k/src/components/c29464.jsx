import React from 'react';
const LABEL_29464 = 'component_29464';
export function Component29464({ value = 29464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29464, 'data-value': derived.doubled }, children);
}
export default Component29464;
