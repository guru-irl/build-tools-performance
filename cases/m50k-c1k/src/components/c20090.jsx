import React from 'react';
const LABEL_20090 = 'component_20090';
export function Component20090({ value = 20090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20090, 'data-value': derived.doubled }, children);
}
export default Component20090;
