import React from 'react';
const LABEL_38450 = 'component_38450';
export function Component38450({ value = 38450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38450, 'data-value': derived.doubled }, children);
}
export default Component38450;
