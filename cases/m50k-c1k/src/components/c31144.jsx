import React from 'react';
const LABEL_31144 = 'component_31144';
export function Component31144({ value = 31144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31144, 'data-value': derived.doubled }, children);
}
export default Component31144;
