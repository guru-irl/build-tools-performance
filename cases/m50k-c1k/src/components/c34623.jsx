import React from 'react';
const LABEL_34623 = 'component_34623';
export function Component34623({ value = 34623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34623, 'data-value': derived.doubled }, children);
}
export default Component34623;
