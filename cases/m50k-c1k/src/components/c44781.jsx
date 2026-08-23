import React from 'react';
const LABEL_44781 = 'component_44781';
export function Component44781({ value = 44781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44781, 'data-value': derived.doubled }, children);
}
export default Component44781;
