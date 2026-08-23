import React from 'react';
const LABEL_14777 = 'component_14777';
export function Component14777({ value = 14777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14777, 'data-value': derived.doubled }, children);
}
export default Component14777;
