import React from 'react';
const LABEL_18347 = 'component_18347';
export function Component18347({ value = 18347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18347, 'data-value': derived.doubled }, children);
}
export default Component18347;
