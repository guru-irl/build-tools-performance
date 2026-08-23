import React from 'react';
const LABEL_44620 = 'component_44620';
export function Component44620({ value = 44620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44620, 'data-value': derived.doubled }, children);
}
export default Component44620;
