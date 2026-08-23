import React from 'react';
const LABEL_34688 = 'component_34688';
export function Component34688({ value = 34688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34688, 'data-value': derived.doubled }, children);
}
export default Component34688;
