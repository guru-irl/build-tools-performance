import React from 'react';
const LABEL_45638 = 'component_45638';
export function Component45638({ value = 45638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45638, 'data-value': derived.doubled }, children);
}
export default Component45638;
