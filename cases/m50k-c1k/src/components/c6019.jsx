import React from 'react';
const LABEL_6019 = 'component_6019';
export function Component6019({ value = 6019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6019, 'data-value': derived.doubled }, children);
}
export default Component6019;
