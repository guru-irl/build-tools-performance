import React from 'react';
const LABEL_20713 = 'component_20713';
export function Component20713({ value = 20713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20713, 'data-value': derived.doubled }, children);
}
export default Component20713;
