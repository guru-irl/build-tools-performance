import React from 'react';
const LABEL_46189 = 'component_46189';
export function Component46189({ value = 46189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46189, 'data-value': derived.doubled }, children);
}
export default Component46189;
