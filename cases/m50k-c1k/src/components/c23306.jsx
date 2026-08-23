import React from 'react';
const LABEL_23306 = 'component_23306';
export function Component23306({ value = 23306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23306, 'data-value': derived.doubled }, children);
}
export default Component23306;
