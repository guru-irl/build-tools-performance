import React from 'react';
const LABEL_41737 = 'component_41737';
export function Component41737({ value = 41737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41737, 'data-value': derived.doubled }, children);
}
export default Component41737;
