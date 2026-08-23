import React from 'react';
const LABEL_14897 = 'component_14897';
export function Component14897({ value = 14897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14897, 'data-value': derived.doubled }, children);
}
export default Component14897;
