import React from 'react';
const LABEL_838 = 'component_838';
export function Component838({ value = 838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_838, 'data-value': derived.doubled }, children);
}
export default Component838;
