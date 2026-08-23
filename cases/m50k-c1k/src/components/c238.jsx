import React from 'react';
const LABEL_238 = 'component_238';
export function Component238({ value = 238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_238, 'data-value': derived.doubled }, children);
}
export default Component238;
