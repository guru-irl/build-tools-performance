import React from 'react';
const LABEL_46682 = 'component_46682';
export function Component46682({ value = 46682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46682, 'data-value': derived.doubled }, children);
}
export default Component46682;
