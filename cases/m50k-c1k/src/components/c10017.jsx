import React from 'react';
const LABEL_10017 = 'component_10017';
export function Component10017({ value = 10017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10017, 'data-value': derived.doubled }, children);
}
export default Component10017;
