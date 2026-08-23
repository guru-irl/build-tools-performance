import React from 'react';
const LABEL_19067 = 'component_19067';
export function Component19067({ value = 19067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19067, 'data-value': derived.doubled }, children);
}
export default Component19067;
