import React from 'react';
const LABEL_35656 = 'component_35656';
export function Component35656({ value = 35656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35656, 'data-value': derived.doubled }, children);
}
export default Component35656;
