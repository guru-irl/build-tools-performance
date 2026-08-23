import React from 'react';
const LABEL_36450 = 'component_36450';
export function Component36450({ value = 36450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36450, 'data-value': derived.doubled }, children);
}
export default Component36450;
