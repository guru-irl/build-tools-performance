import React from 'react';
const LABEL_11860 = 'component_11860';
export function Component11860({ value = 11860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11860, 'data-value': derived.doubled }, children);
}
export default Component11860;
