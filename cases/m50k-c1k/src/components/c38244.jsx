import React from 'react';
const LABEL_38244 = 'component_38244';
export function Component38244({ value = 38244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38244, 'data-value': derived.doubled }, children);
}
export default Component38244;
