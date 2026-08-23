import React from 'react';
const LABEL_37759 = 'component_37759';
export function Component37759({ value = 37759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37759, 'data-value': derived.doubled }, children);
}
export default Component37759;
