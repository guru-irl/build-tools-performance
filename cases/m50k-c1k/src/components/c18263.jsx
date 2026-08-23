import React from 'react';
const LABEL_18263 = 'component_18263';
export function Component18263({ value = 18263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18263, 'data-value': derived.doubled }, children);
}
export default Component18263;
