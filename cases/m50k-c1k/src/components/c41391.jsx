import React from 'react';
const LABEL_41391 = 'component_41391';
export function Component41391({ value = 41391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41391, 'data-value': derived.doubled }, children);
}
export default Component41391;
