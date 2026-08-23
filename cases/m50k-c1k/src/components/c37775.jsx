import React from 'react';
const LABEL_37775 = 'component_37775';
export function Component37775({ value = 37775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37775, 'data-value': derived.doubled }, children);
}
export default Component37775;
