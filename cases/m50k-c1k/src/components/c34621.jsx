import React from 'react';
const LABEL_34621 = 'component_34621';
export function Component34621({ value = 34621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34621, 'data-value': derived.doubled }, children);
}
export default Component34621;
