import React from 'react';
const LABEL_25370 = 'component_25370';
export function Component25370({ value = 25370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25370, 'data-value': derived.doubled }, children);
}
export default Component25370;
