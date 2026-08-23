import React from 'react';
const LABEL_447 = 'component_447';
export function Component447({ value = 447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_447, 'data-value': derived.doubled }, children);
}
export default Component447;
