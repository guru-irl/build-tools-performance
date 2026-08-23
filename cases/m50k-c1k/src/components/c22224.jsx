import React from 'react';
const LABEL_22224 = 'component_22224';
export function Component22224({ value = 22224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22224, 'data-value': derived.doubled }, children);
}
export default Component22224;
