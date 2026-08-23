import React from 'react';
const LABEL_16038 = 'component_16038';
export function Component16038({ value = 16038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16038, 'data-value': derived.doubled }, children);
}
export default Component16038;
