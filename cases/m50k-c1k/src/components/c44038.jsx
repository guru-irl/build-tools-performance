import React from 'react';
const LABEL_44038 = 'component_44038';
export function Component44038({ value = 44038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44038, 'data-value': derived.doubled }, children);
}
export default Component44038;
