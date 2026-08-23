import React from 'react';
const LABEL_37015 = 'component_37015';
export function Component37015({ value = 37015, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37015, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37015, 'data-value': derived.doubled }, children);
}
export default Component37015;
