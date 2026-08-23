import React from 'react';
const LABEL_29325 = 'component_29325';
export function Component29325({ value = 29325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29325, 'data-value': derived.doubled }, children);
}
export default Component29325;
