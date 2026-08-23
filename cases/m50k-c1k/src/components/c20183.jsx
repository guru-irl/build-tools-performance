import React from 'react';
const LABEL_20183 = 'component_20183';
export function Component20183({ value = 20183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20183, 'data-value': derived.doubled }, children);
}
export default Component20183;
