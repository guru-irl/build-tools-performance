import React from 'react';
const LABEL_44524 = 'component_44524';
export function Component44524({ value = 44524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44524, 'data-value': derived.doubled }, children);
}
export default Component44524;
