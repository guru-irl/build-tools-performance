import React from 'react';
const LABEL_1038 = 'component_1038';
export function Component1038({ value = 1038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1038, 'data-value': derived.doubled }, children);
}
export default Component1038;
