import React from 'react';
const LABEL_19441 = 'component_19441';
export function Component19441({ value = 19441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19441, 'data-value': derived.doubled }, children);
}
export default Component19441;
