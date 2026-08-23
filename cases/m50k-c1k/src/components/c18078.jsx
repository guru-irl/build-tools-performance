import React from 'react';
const LABEL_18078 = 'component_18078';
export function Component18078({ value = 18078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18078, 'data-value': derived.doubled }, children);
}
export default Component18078;
