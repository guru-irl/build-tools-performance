import React from 'react';
const LABEL_3019 = 'component_3019';
export function Component3019({ value = 3019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3019, 'data-value': derived.doubled }, children);
}
export default Component3019;
