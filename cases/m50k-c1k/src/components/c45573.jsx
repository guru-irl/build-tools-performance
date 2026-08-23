import React from 'react';
const LABEL_45573 = 'component_45573';
export function Component45573({ value = 45573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45573, 'data-value': derived.doubled }, children);
}
export default Component45573;
