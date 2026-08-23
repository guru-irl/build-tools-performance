import React from 'react';
const LABEL_26019 = 'component_26019';
export function Component26019({ value = 26019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26019, 'data-value': derived.doubled }, children);
}
export default Component26019;
