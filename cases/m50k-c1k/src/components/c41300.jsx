import React from 'react';
const LABEL_41300 = 'component_41300';
export function Component41300({ value = 41300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41300, 'data-value': derived.doubled }, children);
}
export default Component41300;
