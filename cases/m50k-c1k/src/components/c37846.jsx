import React from 'react';
const LABEL_37846 = 'component_37846';
export function Component37846({ value = 37846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37846, 'data-value': derived.doubled }, children);
}
export default Component37846;
