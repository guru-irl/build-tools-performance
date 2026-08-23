import React from 'react';
const LABEL_44450 = 'component_44450';
export function Component44450({ value = 44450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44450, 'data-value': derived.doubled }, children);
}
export default Component44450;
