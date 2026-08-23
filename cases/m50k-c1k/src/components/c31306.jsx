import React from 'react';
const LABEL_31306 = 'component_31306';
export function Component31306({ value = 31306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31306, 'data-value': derived.doubled }, children);
}
export default Component31306;
