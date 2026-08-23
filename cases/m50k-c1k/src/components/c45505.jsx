import React from 'react';
const LABEL_45505 = 'component_45505';
export function Component45505({ value = 45505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45505, 'data-value': derived.doubled }, children);
}
export default Component45505;
