import React from 'react';
const LABEL_19078 = 'component_19078';
export function Component19078({ value = 19078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19078, 'data-value': derived.doubled }, children);
}
export default Component19078;
