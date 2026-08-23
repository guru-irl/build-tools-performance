import React from 'react';
const LABEL_7573 = 'component_7573';
export function Component7573({ value = 7573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7573, 'data-value': derived.doubled }, children);
}
export default Component7573;
