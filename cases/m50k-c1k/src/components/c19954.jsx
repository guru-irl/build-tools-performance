import React from 'react';
const LABEL_19954 = 'component_19954';
export function Component19954({ value = 19954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19954, 'data-value': derived.doubled }, children);
}
export default Component19954;
