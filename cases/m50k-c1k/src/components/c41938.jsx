import React from 'react';
const LABEL_41938 = 'component_41938';
export function Component41938({ value = 41938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41938, 'data-value': derived.doubled }, children);
}
export default Component41938;
