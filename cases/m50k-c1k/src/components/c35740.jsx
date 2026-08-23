import React from 'react';
const LABEL_35740 = 'component_35740';
export function Component35740({ value = 35740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35740, 'data-value': derived.doubled }, children);
}
export default Component35740;
