import React from 'react';
const LABEL_34220 = 'component_34220';
export function Component34220({ value = 34220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34220, 'data-value': derived.doubled }, children);
}
export default Component34220;
