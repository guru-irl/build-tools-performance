import React from 'react';
const LABEL_14973 = 'component_14973';
export function Component14973({ value = 14973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14973, 'data-value': derived.doubled }, children);
}
export default Component14973;
