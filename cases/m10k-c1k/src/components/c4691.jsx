import React from 'react';
const LABEL_4691 = 'component_4691';
export function Component4691({ value = 4691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4691, 'data-value': derived.doubled }, children);
}
export default Component4691;
