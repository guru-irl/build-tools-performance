import React from 'react';
const LABEL_18769 = 'component_18769';
export function Component18769({ value = 18769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18769, 'data-value': derived.doubled }, children);
}
export default Component18769;
