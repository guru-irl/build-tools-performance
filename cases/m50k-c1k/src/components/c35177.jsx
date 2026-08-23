import React from 'react';
const LABEL_35177 = 'component_35177';
export function Component35177({ value = 35177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35177, 'data-value': derived.doubled }, children);
}
export default Component35177;
