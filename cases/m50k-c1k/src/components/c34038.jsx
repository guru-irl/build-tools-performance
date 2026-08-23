import React from 'react';
const LABEL_34038 = 'component_34038';
export function Component34038({ value = 34038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34038, 'data-value': derived.doubled }, children);
}
export default Component34038;
