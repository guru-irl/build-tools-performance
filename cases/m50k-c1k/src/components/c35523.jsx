import React from 'react';
const LABEL_35523 = 'component_35523';
export function Component35523({ value = 35523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35523, 'data-value': derived.doubled }, children);
}
export default Component35523;
