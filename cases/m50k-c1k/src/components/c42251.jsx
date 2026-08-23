import React from 'react';
const LABEL_42251 = 'component_42251';
export function Component42251({ value = 42251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42251, 'data-value': derived.doubled }, children);
}
export default Component42251;
