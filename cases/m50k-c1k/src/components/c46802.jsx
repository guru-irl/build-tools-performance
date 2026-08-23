import React from 'react';
const LABEL_46802 = 'component_46802';
export function Component46802({ value = 46802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46802, 'data-value': derived.doubled }, children);
}
export default Component46802;
