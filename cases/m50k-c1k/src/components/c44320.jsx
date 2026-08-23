import React from 'react';
const LABEL_44320 = 'component_44320';
export function Component44320({ value = 44320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44320, 'data-value': derived.doubled }, children);
}
export default Component44320;
