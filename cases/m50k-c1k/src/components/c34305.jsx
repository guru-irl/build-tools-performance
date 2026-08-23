import React from 'react';
const LABEL_34305 = 'component_34305';
export function Component34305({ value = 34305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34305, 'data-value': derived.doubled }, children);
}
export default Component34305;
