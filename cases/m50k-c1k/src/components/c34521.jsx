import React from 'react';
const LABEL_34521 = 'component_34521';
export function Component34521({ value = 34521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34521, 'data-value': derived.doubled }, children);
}
export default Component34521;
