import React from 'react';
const LABEL_26820 = 'component_26820';
export function Component26820({ value = 26820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26820, 'data-value': derived.doubled }, children);
}
export default Component26820;
