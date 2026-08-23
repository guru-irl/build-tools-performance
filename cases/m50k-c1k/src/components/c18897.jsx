import React from 'react';
const LABEL_18897 = 'component_18897';
export function Component18897({ value = 18897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18897, 'data-value': derived.doubled }, children);
}
export default Component18897;
