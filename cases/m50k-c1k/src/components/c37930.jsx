import React from 'react';
const LABEL_37930 = 'component_37930';
export function Component37930({ value = 37930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37930, 'data-value': derived.doubled }, children);
}
export default Component37930;
