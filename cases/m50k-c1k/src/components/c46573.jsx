import React from 'react';
const LABEL_46573 = 'component_46573';
export function Component46573({ value = 46573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46573, 'data-value': derived.doubled }, children);
}
export default Component46573;
