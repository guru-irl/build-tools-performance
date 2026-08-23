import React from 'react';
const LABEL_10019 = 'component_10019';
export function Component10019({ value = 10019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10019, 'data-value': derived.doubled }, children);
}
export default Component10019;
