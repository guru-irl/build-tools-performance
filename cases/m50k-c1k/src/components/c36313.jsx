import React from 'react';
const LABEL_36313 = 'component_36313';
export function Component36313({ value = 36313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36313, 'data-value': derived.doubled }, children);
}
export default Component36313;
