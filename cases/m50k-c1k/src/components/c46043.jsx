import React from 'react';
const LABEL_46043 = 'component_46043';
export function Component46043({ value = 46043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46043, 'data-value': derived.doubled }, children);
}
export default Component46043;
