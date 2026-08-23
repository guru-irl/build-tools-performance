import React from 'react';
const LABEL_34867 = 'component_34867';
export function Component34867({ value = 34867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34867, 'data-value': derived.doubled }, children);
}
export default Component34867;
