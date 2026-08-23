import React from 'react';
const LABEL_46177 = 'component_46177';
export function Component46177({ value = 46177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46177, 'data-value': derived.doubled }, children);
}
export default Component46177;
