import React from 'react';
const LABEL_13901 = 'component_13901';
export function Component13901({ value = 13901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13901, 'data-value': derived.doubled }, children);
}
export default Component13901;
