import React from 'react';
const LABEL_4652 = 'component_4652';
export function Component4652({ value = 4652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4652, 'data-value': derived.doubled }, children);
}
export default Component4652;
