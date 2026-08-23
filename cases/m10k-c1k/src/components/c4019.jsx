import React from 'react';
const LABEL_4019 = 'component_4019';
export function Component4019({ value = 4019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4019, 'data-value': derived.doubled }, children);
}
export default Component4019;
