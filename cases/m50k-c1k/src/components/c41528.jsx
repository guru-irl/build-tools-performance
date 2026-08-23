import React from 'react';
const LABEL_41528 = 'component_41528';
export function Component41528({ value = 41528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41528, 'data-value': derived.doubled }, children);
}
export default Component41528;
