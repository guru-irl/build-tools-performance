import React from 'react';
const LABEL_44441 = 'component_44441';
export function Component44441({ value = 44441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44441, 'data-value': derived.doubled }, children);
}
export default Component44441;
