import React from 'react';
const LABEL_35067 = 'component_35067';
export function Component35067({ value = 35067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35067, 'data-value': derived.doubled }, children);
}
export default Component35067;
