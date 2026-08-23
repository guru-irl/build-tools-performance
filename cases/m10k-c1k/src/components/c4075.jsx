import React from 'react';
const LABEL_4075 = 'component_4075';
export function Component4075({ value = 4075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4075, 'data-value': derived.doubled }, children);
}
export default Component4075;
