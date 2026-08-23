import React from 'react';
const LABEL_37038 = 'component_37038';
export function Component37038({ value = 37038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37038, 'data-value': derived.doubled }, children);
}
export default Component37038;
