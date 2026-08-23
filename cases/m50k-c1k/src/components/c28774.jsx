import React from 'react';
const LABEL_28774 = 'component_28774';
export function Component28774({ value = 28774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28774, 'data-value': derived.doubled }, children);
}
export default Component28774;
