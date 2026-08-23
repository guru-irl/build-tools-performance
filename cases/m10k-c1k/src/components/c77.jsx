import React from 'react';
const LABEL_77 = 'component_77';
export function Component77({ value = 77, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_77, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_77, 'data-value': derived.doubled }, children);
}
export default Component77;
