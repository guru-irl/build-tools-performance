import React from 'react';
const LABEL_41171 = 'component_41171';
export function Component41171({ value = 41171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41171, 'data-value': derived.doubled }, children);
}
export default Component41171;
