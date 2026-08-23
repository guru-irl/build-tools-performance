import React from 'react';
const LABEL_41984 = 'component_41984';
export function Component41984({ value = 41984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41984, 'data-value': derived.doubled }, children);
}
export default Component41984;
