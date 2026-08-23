import React from 'react';
const LABEL_46861 = 'component_46861';
export function Component46861({ value = 46861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46861, 'data-value': derived.doubled }, children);
}
export default Component46861;
