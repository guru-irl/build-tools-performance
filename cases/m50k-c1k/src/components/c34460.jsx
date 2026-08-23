import React from 'react';
const LABEL_34460 = 'component_34460';
export function Component34460({ value = 34460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34460, 'data-value': derived.doubled }, children);
}
export default Component34460;
