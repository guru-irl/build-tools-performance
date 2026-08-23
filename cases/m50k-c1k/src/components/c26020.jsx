import React from 'react';
const LABEL_26020 = 'component_26020';
export function Component26020({ value = 26020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26020, 'data-value': derived.doubled }, children);
}
export default Component26020;
