import React from 'react';
const LABEL_19564 = 'component_19564';
export function Component19564({ value = 19564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19564, 'data-value': derived.doubled }, children);
}
export default Component19564;
