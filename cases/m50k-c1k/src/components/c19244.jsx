import React from 'react';
const LABEL_19244 = 'component_19244';
export function Component19244({ value = 19244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19244, 'data-value': derived.doubled }, children);
}
export default Component19244;
