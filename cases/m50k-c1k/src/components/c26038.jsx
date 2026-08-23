import React from 'react';
const LABEL_26038 = 'component_26038';
export function Component26038({ value = 26038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26038, 'data-value': derived.doubled }, children);
}
export default Component26038;
