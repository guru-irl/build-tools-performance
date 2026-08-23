import React from 'react';
const LABEL_44121 = 'component_44121';
export function Component44121({ value = 44121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44121, 'data-value': derived.doubled }, children);
}
export default Component44121;
