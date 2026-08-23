import React from 'react';
const LABEL_41131 = 'component_41131';
export function Component41131({ value = 41131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41131, 'data-value': derived.doubled }, children);
}
export default Component41131;
