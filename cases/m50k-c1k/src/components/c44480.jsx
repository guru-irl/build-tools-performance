import React from 'react';
const LABEL_44480 = 'component_44480';
export function Component44480({ value = 44480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44480, 'data-value': derived.doubled }, children);
}
export default Component44480;
