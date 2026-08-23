import React from 'react';
const LABEL_41251 = 'component_41251';
export function Component41251({ value = 41251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41251, 'data-value': derived.doubled }, children);
}
export default Component41251;
