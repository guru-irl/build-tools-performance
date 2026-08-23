import React from 'react';
const LABEL_30166 = 'component_30166';
export function Component30166({ value = 30166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30166, 'data-value': derived.doubled }, children);
}
export default Component30166;
