import React from 'react';
const LABEL_6772 = 'component_6772';
export function Component6772({ value = 6772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6772, 'data-value': derived.doubled }, children);
}
export default Component6772;
