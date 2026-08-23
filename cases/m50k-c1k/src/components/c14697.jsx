import React from 'react';
const LABEL_14697 = 'component_14697';
export function Component14697({ value = 14697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14697, 'data-value': derived.doubled }, children);
}
export default Component14697;
