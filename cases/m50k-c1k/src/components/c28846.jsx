import React from 'react';
const LABEL_28846 = 'component_28846';
export function Component28846({ value = 28846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28846, 'data-value': derived.doubled }, children);
}
export default Component28846;
