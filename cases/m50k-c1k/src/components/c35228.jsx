import React from 'react';
const LABEL_35228 = 'component_35228';
export function Component35228({ value = 35228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35228, 'data-value': derived.doubled }, children);
}
export default Component35228;
