import React from 'react';
const LABEL_25179 = 'component_25179';
export function Component25179({ value = 25179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25179, 'data-value': derived.doubled }, children);
}
export default Component25179;
