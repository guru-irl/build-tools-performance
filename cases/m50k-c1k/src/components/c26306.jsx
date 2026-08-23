import React from 'react';
const LABEL_26306 = 'component_26306';
export function Component26306({ value = 26306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26306, 'data-value': derived.doubled }, children);
}
export default Component26306;
