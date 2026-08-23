import React from 'react';
const LABEL_24337 = 'component_24337';
export function Component24337({ value = 24337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24337, 'data-value': derived.doubled }, children);
}
export default Component24337;
