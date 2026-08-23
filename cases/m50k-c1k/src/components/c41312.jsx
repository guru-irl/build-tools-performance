import React from 'react';
const LABEL_41312 = 'component_41312';
export function Component41312({ value = 41312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41312, 'data-value': derived.doubled }, children);
}
export default Component41312;
