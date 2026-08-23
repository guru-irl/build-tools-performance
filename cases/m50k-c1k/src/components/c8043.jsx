import React from 'react';
const LABEL_8043 = 'component_8043';
export function Component8043({ value = 8043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8043, 'data-value': derived.doubled }, children);
}
export default Component8043;
