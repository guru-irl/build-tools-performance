import React from 'react';
const LABEL_9067 = 'component_9067';
export function Component9067({ value = 9067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9067, 'data-value': derived.doubled }, children);
}
export default Component9067;
