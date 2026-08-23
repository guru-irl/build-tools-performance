import React from 'react';
const LABEL_4244 = 'component_4244';
export function Component4244({ value = 4244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4244, 'data-value': derived.doubled }, children);
}
export default Component4244;
