import React from 'react';
const LABEL_41265 = 'component_41265';
export function Component41265({ value = 41265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41265, 'data-value': derived.doubled }, children);
}
export default Component41265;
