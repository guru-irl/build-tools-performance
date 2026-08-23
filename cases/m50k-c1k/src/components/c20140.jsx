import React from 'react';
const LABEL_20140 = 'component_20140';
export function Component20140({ value = 20140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20140, 'data-value': derived.doubled }, children);
}
export default Component20140;
