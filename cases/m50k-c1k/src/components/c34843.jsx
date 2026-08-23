import React from 'react';
const LABEL_34843 = 'component_34843';
export function Component34843({ value = 34843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34843, 'data-value': derived.doubled }, children);
}
export default Component34843;
