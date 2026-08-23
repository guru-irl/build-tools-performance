import React from 'react';
const LABEL_13306 = 'component_13306';
export function Component13306({ value = 13306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13306, 'data-value': derived.doubled }, children);
}
export default Component13306;
