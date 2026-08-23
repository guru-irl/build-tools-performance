import React from 'react';
const LABEL_6468 = 'component_6468';
export function Component6468({ value = 6468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6468, 'data-value': derived.doubled }, children);
}
export default Component6468;
