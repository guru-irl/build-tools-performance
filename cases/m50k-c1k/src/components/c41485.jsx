import React from 'react';
const LABEL_41485 = 'component_41485';
export function Component41485({ value = 41485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41485, 'data-value': derived.doubled }, children);
}
export default Component41485;
