import React from 'react';
const LABEL_18019 = 'component_18019';
export function Component18019({ value = 18019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18019, 'data-value': derived.doubled }, children);
}
export default Component18019;
