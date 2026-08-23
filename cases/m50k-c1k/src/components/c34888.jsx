import React from 'react';
const LABEL_34888 = 'component_34888';
export function Component34888({ value = 34888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34888, 'data-value': derived.doubled }, children);
}
export default Component34888;
