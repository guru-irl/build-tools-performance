import React from 'react';
const LABEL_19480 = 'component_19480';
export function Component19480({ value = 19480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19480, 'data-value': derived.doubled }, children);
}
export default Component19480;
