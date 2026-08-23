import React from 'react';
const LABEL_25147 = 'component_25147';
export function Component25147({ value = 25147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25147, 'data-value': derived.doubled }, children);
}
export default Component25147;
