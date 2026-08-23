import React from 'react';
const LABEL_34005 = 'component_34005';
export function Component34005({ value = 34005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34005, 'data-value': derived.doubled }, children);
}
export default Component34005;
