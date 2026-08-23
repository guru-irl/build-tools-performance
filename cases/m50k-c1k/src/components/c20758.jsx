import React from 'react';
const LABEL_20758 = 'component_20758';
export function Component20758({ value = 20758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20758, 'data-value': derived.doubled }, children);
}
export default Component20758;
