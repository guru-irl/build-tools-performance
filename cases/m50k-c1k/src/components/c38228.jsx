import React from 'react';
const LABEL_38228 = 'component_38228';
export function Component38228({ value = 38228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38228, 'data-value': derived.doubled }, children);
}
export default Component38228;
