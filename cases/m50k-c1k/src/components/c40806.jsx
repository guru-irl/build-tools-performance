import React from 'react';
const LABEL_40806 = 'component_40806';
export function Component40806({ value = 40806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40806, 'data-value': derived.doubled }, children);
}
export default Component40806;
