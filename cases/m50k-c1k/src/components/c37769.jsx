import React from 'react';
const LABEL_37769 = 'component_37769';
export function Component37769({ value = 37769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37769, 'data-value': derived.doubled }, children);
}
export default Component37769;
