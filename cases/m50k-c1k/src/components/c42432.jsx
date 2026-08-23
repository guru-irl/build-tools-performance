import React from 'react';
const LABEL_42432 = 'component_42432';
export function Component42432({ value = 42432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42432, 'data-value': derived.doubled }, children);
}
export default Component42432;
