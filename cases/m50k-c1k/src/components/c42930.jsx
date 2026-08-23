import React from 'react';
const LABEL_42930 = 'component_42930';
export function Component42930({ value = 42930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42930, 'data-value': derived.doubled }, children);
}
export default Component42930;
