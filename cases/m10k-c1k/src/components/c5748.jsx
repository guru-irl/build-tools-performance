import React from 'react';
const LABEL_5748 = 'component_5748';
export function Component5748({ value = 5748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5748, 'data-value': derived.doubled }, children);
}
export default Component5748;
