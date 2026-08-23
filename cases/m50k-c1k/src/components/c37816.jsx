import React from 'react';
const LABEL_37816 = 'component_37816';
export function Component37816({ value = 37816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37816, 'data-value': derived.doubled }, children);
}
export default Component37816;
