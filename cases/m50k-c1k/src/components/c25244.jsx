import React from 'react';
const LABEL_25244 = 'component_25244';
export function Component25244({ value = 25244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25244, 'data-value': derived.doubled }, children);
}
export default Component25244;
