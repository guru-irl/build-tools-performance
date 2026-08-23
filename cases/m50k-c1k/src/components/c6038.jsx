import React from 'react';
const LABEL_6038 = 'component_6038';
export function Component6038({ value = 6038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6038, 'data-value': derived.doubled }, children);
}
export default Component6038;
