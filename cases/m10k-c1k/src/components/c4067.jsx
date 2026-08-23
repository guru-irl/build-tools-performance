import React from 'react';
const LABEL_4067 = 'component_4067';
export function Component4067({ value = 4067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4067, 'data-value': derived.doubled }, children);
}
export default Component4067;
