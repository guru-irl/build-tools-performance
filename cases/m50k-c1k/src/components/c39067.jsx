import React from 'react';
const LABEL_39067 = 'component_39067';
export function Component39067({ value = 39067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39067, 'data-value': derived.doubled }, children);
}
export default Component39067;
