import React from 'react';
const LABEL_25973 = 'component_25973';
export function Component25973({ value = 25973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25973, 'data-value': derived.doubled }, children);
}
export default Component25973;
