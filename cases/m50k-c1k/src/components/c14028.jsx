import React from 'react';
const LABEL_14028 = 'component_14028';
export function Component14028({ value = 14028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14028, 'data-value': derived.doubled }, children);
}
export default Component14028;
