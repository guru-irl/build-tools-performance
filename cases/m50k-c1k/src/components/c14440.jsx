import React from 'react';
const LABEL_14440 = 'component_14440';
export function Component14440({ value = 14440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14440, 'data-value': derived.doubled }, children);
}
export default Component14440;
