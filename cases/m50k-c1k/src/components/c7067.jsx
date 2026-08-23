import React from 'react';
const LABEL_7067 = 'component_7067';
export function Component7067({ value = 7067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7067, 'data-value': derived.doubled }, children);
}
export default Component7067;
