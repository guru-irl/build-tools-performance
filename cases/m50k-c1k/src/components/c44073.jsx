import React from 'react';
const LABEL_44073 = 'component_44073';
export function Component44073({ value = 44073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44073, 'data-value': derived.doubled }, children);
}
export default Component44073;
