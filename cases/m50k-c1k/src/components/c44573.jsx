import React from 'react';
const LABEL_44573 = 'component_44573';
export function Component44573({ value = 44573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44573, 'data-value': derived.doubled }, children);
}
export default Component44573;
