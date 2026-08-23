import React from 'react';
const LABEL_46832 = 'component_46832';
export function Component46832({ value = 46832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46832, 'data-value': derived.doubled }, children);
}
export default Component46832;
