import React from 'react';
const LABEL_19582 = 'component_19582';
export function Component19582({ value = 19582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19582, 'data-value': derived.doubled }, children);
}
export default Component19582;
