import React from 'react';
const LABEL_8522 = 'component_8522';
export function Component8522({ value = 8522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8522, 'data-value': derived.doubled }, children);
}
export default Component8522;
