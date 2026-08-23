import React from 'react';
const LABEL_19250 = 'component_19250';
export function Component19250({ value = 19250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19250, 'data-value': derived.doubled }, children);
}
export default Component19250;
