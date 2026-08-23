import React from 'react';
const LABEL_19300 = 'component_19300';
export function Component19300({ value = 19300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19300, 'data-value': derived.doubled }, children);
}
export default Component19300;
