import React from 'react';
const LABEL_42585 = 'component_42585';
export function Component42585({ value = 42585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42585, 'data-value': derived.doubled }, children);
}
export default Component42585;
