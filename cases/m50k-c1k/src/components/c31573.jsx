import React from 'react';
const LABEL_31573 = 'component_31573';
export function Component31573({ value = 31573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31573, 'data-value': derived.doubled }, children);
}
export default Component31573;
