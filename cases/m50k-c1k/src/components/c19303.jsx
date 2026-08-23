import React from 'react';
const LABEL_19303 = 'component_19303';
export function Component19303({ value = 19303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19303, 'data-value': derived.doubled }, children);
}
export default Component19303;
