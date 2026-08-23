import React from 'react';
const LABEL_38447 = 'component_38447';
export function Component38447({ value = 38447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38447, 'data-value': derived.doubled }, children);
}
export default Component38447;
