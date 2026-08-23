import React from 'react';
const LABEL_44392 = 'component_44392';
export function Component44392({ value = 44392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44392, 'data-value': derived.doubled }, children);
}
export default Component44392;
