import React from 'react';
const LABEL_19251 = 'component_19251';
export function Component19251({ value = 19251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19251, 'data-value': derived.doubled }, children);
}
export default Component19251;
