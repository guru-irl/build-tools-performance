import React from 'react';
const LABEL_41754 = 'component_41754';
export function Component41754({ value = 41754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41754, 'data-value': derived.doubled }, children);
}
export default Component41754;
