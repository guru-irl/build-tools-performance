import React from 'react';
const LABEL_18205 = 'component_18205';
export function Component18205({ value = 18205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18205, 'data-value': derived.doubled }, children);
}
export default Component18205;
