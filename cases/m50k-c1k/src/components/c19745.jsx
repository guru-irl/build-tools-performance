import React from 'react';
const LABEL_19745 = 'component_19745';
export function Component19745({ value = 19745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19745, 'data-value': derived.doubled }, children);
}
export default Component19745;
