import React from 'react';
const LABEL_35456 = 'component_35456';
export function Component35456({ value = 35456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35456, 'data-value': derived.doubled }, children);
}
export default Component35456;
