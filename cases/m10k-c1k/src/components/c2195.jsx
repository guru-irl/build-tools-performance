import React from 'react';
const LABEL_2195 = 'component_2195';
export function Component2195({ value = 2195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2195, 'data-value': derived.doubled }, children);
}
export default Component2195;
