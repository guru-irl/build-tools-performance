import React from 'react';
const LABEL_34911 = 'component_34911';
export function Component34911({ value = 34911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34911, 'data-value': derived.doubled }, children);
}
export default Component34911;
