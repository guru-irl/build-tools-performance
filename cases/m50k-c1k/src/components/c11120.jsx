import React from 'react';
const LABEL_11120 = 'component_11120';
export function Component11120({ value = 11120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11120, 'data-value': derived.doubled }, children);
}
export default Component11120;
