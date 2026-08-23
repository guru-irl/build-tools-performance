import React from 'react';
const LABEL_39523 = 'component_39523';
export function Component39523({ value = 39523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39523, 'data-value': derived.doubled }, children);
}
export default Component39523;
