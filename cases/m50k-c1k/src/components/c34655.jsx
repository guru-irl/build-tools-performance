import React from 'react';
const LABEL_34655 = 'component_34655';
export function Component34655({ value = 34655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34655, 'data-value': derived.doubled }, children);
}
export default Component34655;
