import React from 'react';
const LABEL_22028 = 'component_22028';
export function Component22028({ value = 22028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22028, 'data-value': derived.doubled }, children);
}
export default Component22028;
