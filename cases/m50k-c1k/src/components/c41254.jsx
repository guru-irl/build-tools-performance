import React from 'react';
const LABEL_41254 = 'component_41254';
export function Component41254({ value = 41254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41254, 'data-value': derived.doubled }, children);
}
export default Component41254;
