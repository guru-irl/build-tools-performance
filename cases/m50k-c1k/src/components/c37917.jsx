import React from 'react';
const LABEL_37917 = 'component_37917';
export function Component37917({ value = 37917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37917, 'data-value': derived.doubled }, children);
}
export default Component37917;
