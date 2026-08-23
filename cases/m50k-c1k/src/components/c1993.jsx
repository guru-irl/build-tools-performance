import React from 'react';
const LABEL_1993 = 'component_1993';
export function Component1993({ value = 1993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1993, 'data-value': derived.doubled }, children);
}
export default Component1993;
