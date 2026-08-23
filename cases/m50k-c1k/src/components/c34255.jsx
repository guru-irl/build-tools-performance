import React from 'react';
const LABEL_34255 = 'component_34255';
export function Component34255({ value = 34255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34255, 'data-value': derived.doubled }, children);
}
export default Component34255;
