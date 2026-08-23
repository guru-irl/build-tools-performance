import React from 'react';
const LABEL_42447 = 'component_42447';
export function Component42447({ value = 42447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42447, 'data-value': derived.doubled }, children);
}
export default Component42447;
