import React from 'react';
const LABEL_46791 = 'component_46791';
export function Component46791({ value = 46791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46791, 'data-value': derived.doubled }, children);
}
export default Component46791;
