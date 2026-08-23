import React from 'react';
const LABEL_19847 = 'component_19847';
export function Component19847({ value = 19847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19847, 'data-value': derived.doubled }, children);
}
export default Component19847;
