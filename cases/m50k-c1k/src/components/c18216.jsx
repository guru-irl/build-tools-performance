import React from 'react';
const LABEL_18216 = 'component_18216';
export function Component18216({ value = 18216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18216, 'data-value': derived.doubled }, children);
}
export default Component18216;
