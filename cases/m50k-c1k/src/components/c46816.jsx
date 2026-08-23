import React from 'react';
const LABEL_46816 = 'component_46816';
export function Component46816({ value = 46816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46816, 'data-value': derived.doubled }, children);
}
export default Component46816;
