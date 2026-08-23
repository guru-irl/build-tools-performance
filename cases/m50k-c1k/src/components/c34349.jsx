import React from 'react';
const LABEL_34349 = 'component_34349';
export function Component34349({ value = 34349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34349, 'data-value': derived.doubled }, children);
}
export default Component34349;
