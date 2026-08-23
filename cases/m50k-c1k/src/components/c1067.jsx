import React from 'react';
const LABEL_1067 = 'component_1067';
export function Component1067({ value = 1067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1067, 'data-value': derived.doubled }, children);
}
export default Component1067;
