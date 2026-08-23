import React from 'react';
const LABEL_36347 = 'component_36347';
export function Component36347({ value = 36347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36347, 'data-value': derived.doubled }, children);
}
export default Component36347;
