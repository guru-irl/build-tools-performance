import React from 'react';
const LABEL_37450 = 'component_37450';
export function Component37450({ value = 37450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37450, 'data-value': derived.doubled }, children);
}
export default Component37450;
