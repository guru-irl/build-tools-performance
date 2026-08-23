import React from 'react';
const LABEL_37571 = 'component_37571';
export function Component37571({ value = 37571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37571, 'data-value': derived.doubled }, children);
}
export default Component37571;
