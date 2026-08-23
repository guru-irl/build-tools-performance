import React from 'react';
const LABEL_11216 = 'component_11216';
export function Component11216({ value = 11216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11216, 'data-value': derived.doubled }, children);
}
export default Component11216;
