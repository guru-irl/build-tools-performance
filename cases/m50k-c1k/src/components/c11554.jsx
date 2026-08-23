import React from 'react';
const LABEL_11554 = 'component_11554';
export function Component11554({ value = 11554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11554, 'data-value': derived.doubled }, children);
}
export default Component11554;
