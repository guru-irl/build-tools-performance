import React from 'react';
const LABEL_25564 = 'component_25564';
export function Component25564({ value = 25564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25564, 'data-value': derived.doubled }, children);
}
export default Component25564;
