import React from 'react';
const LABEL_34651 = 'component_34651';
export function Component34651({ value = 34651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34651, 'data-value': derived.doubled }, children);
}
export default Component34651;
