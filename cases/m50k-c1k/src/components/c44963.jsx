import React from 'react';
const LABEL_44963 = 'component_44963';
export function Component44963({ value = 44963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44963, 'data-value': derived.doubled }, children);
}
export default Component44963;
