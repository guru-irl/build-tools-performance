import React from 'react';
const LABEL_19848 = 'component_19848';
export function Component19848({ value = 19848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19848, 'data-value': derived.doubled }, children);
}
export default Component19848;
