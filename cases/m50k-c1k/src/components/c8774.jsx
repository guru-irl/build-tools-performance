import React from 'react';
const LABEL_8774 = 'component_8774';
export function Component8774({ value = 8774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8774, 'data-value': derived.doubled }, children);
}
export default Component8774;
