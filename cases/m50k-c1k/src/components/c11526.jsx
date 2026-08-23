import React from 'react';
const LABEL_11526 = 'component_11526';
export function Component11526({ value = 11526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11526, 'data-value': derived.doubled }, children);
}
export default Component11526;
