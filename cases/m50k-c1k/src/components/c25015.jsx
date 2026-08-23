import React from 'react';
const LABEL_25015 = 'component_25015';
export function Component25015({ value = 25015, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25015, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25015, 'data-value': derived.doubled }, children);
}
export default Component25015;
