import React from 'react';
const LABEL_11523 = 'component_11523';
export function Component11523({ value = 11523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11523, 'data-value': derived.doubled }, children);
}
export default Component11523;
