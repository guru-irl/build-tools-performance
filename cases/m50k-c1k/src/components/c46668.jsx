import React from 'react';
const LABEL_46668 = 'component_46668';
export function Component46668({ value = 46668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46668, 'data-value': derived.doubled }, children);
}
export default Component46668;
