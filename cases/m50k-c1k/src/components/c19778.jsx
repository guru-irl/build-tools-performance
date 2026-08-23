import React from 'react';
const LABEL_19778 = 'component_19778';
export function Component19778({ value = 19778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19778, 'data-value': derived.doubled }, children);
}
export default Component19778;
