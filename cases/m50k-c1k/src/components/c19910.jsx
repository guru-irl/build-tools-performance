import React from 'react';
const LABEL_19910 = 'component_19910';
export function Component19910({ value = 19910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19910, 'data-value': derived.doubled }, children);
}
export default Component19910;
