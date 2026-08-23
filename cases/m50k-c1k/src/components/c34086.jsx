import React from 'react';
const LABEL_34086 = 'component_34086';
export function Component34086({ value = 34086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34086, 'data-value': derived.doubled }, children);
}
export default Component34086;
