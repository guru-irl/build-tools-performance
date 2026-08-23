import React from 'react';
const LABEL_26307 = 'component_26307';
export function Component26307({ value = 26307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26307, 'data-value': derived.doubled }, children);
}
export default Component26307;
