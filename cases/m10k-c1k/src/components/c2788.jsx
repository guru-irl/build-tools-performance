import React from 'react';
const LABEL_2788 = 'component_2788';
export function Component2788({ value = 2788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2788, 'data-value': derived.doubled }, children);
}
export default Component2788;
