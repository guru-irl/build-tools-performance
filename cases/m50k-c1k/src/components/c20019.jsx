import React from 'react';
const LABEL_20019 = 'component_20019';
export function Component20019({ value = 20019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20019, 'data-value': derived.doubled }, children);
}
export default Component20019;
