import React from 'react';
const LABEL_4523 = 'component_4523';
export function Component4523({ value = 4523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4523, 'data-value': derived.doubled }, children);
}
export default Component4523;
