import React from 'react';
const LABEL_18573 = 'component_18573';
export function Component18573({ value = 18573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18573, 'data-value': derived.doubled }, children);
}
export default Component18573;
