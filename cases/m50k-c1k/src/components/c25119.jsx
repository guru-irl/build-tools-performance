import React from 'react';
const LABEL_25119 = 'component_25119';
export function Component25119({ value = 25119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25119, 'data-value': derived.doubled }, children);
}
export default Component25119;
