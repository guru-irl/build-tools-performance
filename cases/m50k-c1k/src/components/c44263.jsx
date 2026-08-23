import React from 'react';
const LABEL_44263 = 'component_44263';
export function Component44263({ value = 44263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44263, 'data-value': derived.doubled }, children);
}
export default Component44263;
