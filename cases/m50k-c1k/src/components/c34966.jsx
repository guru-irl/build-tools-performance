import React from 'react';
const LABEL_34966 = 'component_34966';
export function Component34966({ value = 34966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34966, 'data-value': derived.doubled }, children);
}
export default Component34966;
