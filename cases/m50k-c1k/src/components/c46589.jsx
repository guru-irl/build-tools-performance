import React from 'react';
const LABEL_46589 = 'component_46589';
export function Component46589({ value = 46589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46589, 'data-value': derived.doubled }, children);
}
export default Component46589;
