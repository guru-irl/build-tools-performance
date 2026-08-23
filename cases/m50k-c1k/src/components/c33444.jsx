import React from 'react';
const LABEL_33444 = 'component_33444';
export function Component33444({ value = 33444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33444, 'data-value': derived.doubled }, children);
}
export default Component33444;
