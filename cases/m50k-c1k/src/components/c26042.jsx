import React from 'react';
const LABEL_26042 = 'component_26042';
export function Component26042({ value = 26042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26042, 'data-value': derived.doubled }, children);
}
export default Component26042;
