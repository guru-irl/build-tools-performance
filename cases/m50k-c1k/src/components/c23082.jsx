import React from 'react';
const LABEL_23082 = 'component_23082';
export function Component23082({ value = 23082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23082, 'data-value': derived.doubled }, children);
}
export default Component23082;
