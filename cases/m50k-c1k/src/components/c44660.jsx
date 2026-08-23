import React from 'react';
const LABEL_44660 = 'component_44660';
export function Component44660({ value = 44660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44660, 'data-value': derived.doubled }, children);
}
export default Component44660;
