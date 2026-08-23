import React from 'react';
const LABEL_6755 = 'component_6755';
export function Component6755({ value = 6755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6755, 'data-value': derived.doubled }, children);
}
export default Component6755;
