import React from 'react';
const LABEL_24050 = 'component_24050';
export function Component24050({ value = 24050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24050, 'data-value': derived.doubled }, children);
}
export default Component24050;
