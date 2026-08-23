import React from 'react';
const LABEL_22120 = 'component_22120';
export function Component22120({ value = 22120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22120, 'data-value': derived.doubled }, children);
}
export default Component22120;
