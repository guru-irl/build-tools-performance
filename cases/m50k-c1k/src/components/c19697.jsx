import React from 'react';
const LABEL_19697 = 'component_19697';
export function Component19697({ value = 19697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19697, 'data-value': derived.doubled }, children);
}
export default Component19697;
