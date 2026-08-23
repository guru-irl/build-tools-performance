import React from 'react';
const LABEL_7447 = 'component_7447';
export function Component7447({ value = 7447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7447, 'data-value': derived.doubled }, children);
}
export default Component7447;
