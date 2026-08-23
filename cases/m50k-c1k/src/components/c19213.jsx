import React from 'react';
const LABEL_19213 = 'component_19213';
export function Component19213({ value = 19213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19213, 'data-value': derived.doubled }, children);
}
export default Component19213;
