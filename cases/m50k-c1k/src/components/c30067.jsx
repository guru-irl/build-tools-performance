import React from 'react';
const LABEL_30067 = 'component_30067';
export function Component30067({ value = 30067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30067, 'data-value': derived.doubled }, children);
}
export default Component30067;
