import React from 'react';
const LABEL_43522 = 'component_43522';
export function Component43522({ value = 43522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43522, 'data-value': derived.doubled }, children);
}
export default Component43522;
