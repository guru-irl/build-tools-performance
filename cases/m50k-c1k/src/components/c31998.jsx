import React from 'react';
const LABEL_31998 = 'component_31998';
export function Component31998({ value = 31998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31998, 'data-value': derived.doubled }, children);
}
export default Component31998;
