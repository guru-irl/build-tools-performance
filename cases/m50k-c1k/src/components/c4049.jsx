import React from 'react';
const LABEL_4049 = 'component_4049';
export function Component4049({ value = 4049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4049, 'data-value': derived.doubled }, children);
}
export default Component4049;
