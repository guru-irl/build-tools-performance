import React from 'react';
const LABEL_33019 = 'component_33019';
export function Component33019({ value = 33019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33019, 'data-value': derived.doubled }, children);
}
export default Component33019;
