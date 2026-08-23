import React from 'react';
const LABEL_34632 = 'component_34632';
export function Component34632({ value = 34632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34632, 'data-value': derived.doubled }, children);
}
export default Component34632;
