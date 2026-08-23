import React from 'react';
const LABEL_523 = 'component_523';
export function Component523({ value = 523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_523, 'data-value': derived.doubled }, children);
}
export default Component523;
