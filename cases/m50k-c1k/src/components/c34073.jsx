import React from 'react';
const LABEL_34073 = 'component_34073';
export function Component34073({ value = 34073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34073, 'data-value': derived.doubled }, children);
}
export default Component34073;
