import React from 'react';
const LABEL_37730 = 'component_37730';
export function Component37730({ value = 37730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37730, 'data-value': derived.doubled }, children);
}
export default Component37730;
