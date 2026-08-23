import React from 'react';
const LABEL_44651 = 'component_44651';
export function Component44651({ value = 44651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44651, 'data-value': derived.doubled }, children);
}
export default Component44651;
