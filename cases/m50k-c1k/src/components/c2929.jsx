import React from 'react';
const LABEL_2929 = 'component_2929';
export function Component2929({ value = 2929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2929, 'data-value': derived.doubled }, children);
}
export default Component2929;
