import React from 'react';
const LABEL_34781 = 'component_34781';
export function Component34781({ value = 34781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34781, 'data-value': derived.doubled }, children);
}
export default Component34781;
