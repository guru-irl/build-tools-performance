import React from 'react';
const LABEL_4263 = 'component_4263';
export function Component4263({ value = 4263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4263, 'data-value': derived.doubled }, children);
}
export default Component4263;
