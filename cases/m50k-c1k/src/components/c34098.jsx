import React from 'react';
const LABEL_34098 = 'component_34098';
export function Component34098({ value = 34098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34098, 'data-value': derived.doubled }, children);
}
export default Component34098;
