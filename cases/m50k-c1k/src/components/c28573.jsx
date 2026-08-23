import React from 'react';
const LABEL_28573 = 'component_28573';
export function Component28573({ value = 28573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28573, 'data-value': derived.doubled }, children);
}
export default Component28573;
