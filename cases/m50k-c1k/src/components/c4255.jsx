import React from 'react';
const LABEL_4255 = 'component_4255';
export function Component4255({ value = 4255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4255, 'data-value': derived.doubled }, children);
}
export default Component4255;
