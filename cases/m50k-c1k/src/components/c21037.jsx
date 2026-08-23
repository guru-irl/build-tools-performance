import React from 'react';
const LABEL_21037 = 'component_21037';
export function Component21037({ value = 21037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21037, 'data-value': derived.doubled }, children);
}
export default Component21037;
