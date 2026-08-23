import React from 'react';
const LABEL_22611 = 'component_22611';
export function Component22611({ value = 22611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22611, 'data-value': derived.doubled }, children);
}
export default Component22611;
