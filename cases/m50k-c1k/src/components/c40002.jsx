import React from 'react';
const LABEL_40002 = 'component_40002';
export function Component40002({ value = 40002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40002, 'data-value': derived.doubled }, children);
}
export default Component40002;
