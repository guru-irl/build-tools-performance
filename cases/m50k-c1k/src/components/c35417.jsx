import React from 'react';
const LABEL_35417 = 'component_35417';
export function Component35417({ value = 35417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35417, 'data-value': derived.doubled }, children);
}
export default Component35417;
