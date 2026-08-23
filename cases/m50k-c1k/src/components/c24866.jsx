import React from 'react';
const LABEL_24866 = 'component_24866';
export function Component24866({ value = 24866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24866, 'data-value': derived.doubled }, children);
}
export default Component24866;
