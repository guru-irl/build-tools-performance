import React from 'react';
const LABEL_5554 = 'component_5554';
export function Component5554({ value = 5554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5554, 'data-value': derived.doubled }, children);
}
export default Component5554;
