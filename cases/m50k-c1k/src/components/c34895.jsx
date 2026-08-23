import React from 'react';
const LABEL_34895 = 'component_34895';
export function Component34895({ value = 34895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34895, 'data-value': derived.doubled }, children);
}
export default Component34895;
