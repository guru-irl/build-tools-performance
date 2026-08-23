import React from 'react';
const LABEL_38895 = 'component_38895';
export function Component38895({ value = 38895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38895, 'data-value': derived.doubled }, children);
}
export default Component38895;
