import React from 'react';
const LABEL_27365 = 'component_27365';
export function Component27365({ value = 27365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27365, 'data-value': derived.doubled }, children);
}
export default Component27365;
