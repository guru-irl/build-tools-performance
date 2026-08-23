import React from 'react';
const LABEL_42651 = 'component_42651';
export function Component42651({ value = 42651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42651, 'data-value': derived.doubled }, children);
}
export default Component42651;
