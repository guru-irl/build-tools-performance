import React from 'react';
const LABEL_44982 = 'component_44982';
export function Component44982({ value = 44982, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44982, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44982, 'data-value': derived.doubled }, children);
}
export default Component44982;
