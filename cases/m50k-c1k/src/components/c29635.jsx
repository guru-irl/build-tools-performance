import React from 'react';
const LABEL_29635 = 'component_29635';
export function Component29635({ value = 29635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29635, 'data-value': derived.doubled }, children);
}
export default Component29635;
