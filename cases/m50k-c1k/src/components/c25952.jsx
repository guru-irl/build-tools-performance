import React from 'react';
const LABEL_25952 = 'component_25952';
export function Component25952({ value = 25952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25952, 'data-value': derived.doubled }, children);
}
export default Component25952;
