import React from 'react';
const LABEL_4043 = 'component_4043';
export function Component4043({ value = 4043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4043, 'data-value': derived.doubled }, children);
}
export default Component4043;
