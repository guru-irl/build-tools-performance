import React from 'react';
const LABEL_29941 = 'component_29941';
export function Component29941({ value = 29941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29941, 'data-value': derived.doubled }, children);
}
export default Component29941;
