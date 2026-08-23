import React from 'react';
const LABEL_37075 = 'component_37075';
export function Component37075({ value = 37075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37075, 'data-value': derived.doubled }, children);
}
export default Component37075;
