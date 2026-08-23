import React from 'react';
const LABEL_306 = 'component_306';
export function Component306({ value = 306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_306, 'data-value': derived.doubled }, children);
}
export default Component306;
