import React from 'react';
const LABEL_22432 = 'component_22432';
export function Component22432({ value = 22432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22432, 'data-value': derived.doubled }, children);
}
export default Component22432;
