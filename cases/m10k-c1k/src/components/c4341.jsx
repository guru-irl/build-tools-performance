import React from 'react';
const LABEL_4341 = 'component_4341';
export function Component4341({ value = 4341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4341, 'data-value': derived.doubled }, children);
}
export default Component4341;
