import React from 'react';
const LABEL_8571 = 'component_8571';
export function Component8571({ value = 8571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8571, 'data-value': derived.doubled }, children);
}
export default Component8571;
