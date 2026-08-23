import React from 'react';
const LABEL_834 = 'component_834';
export function Component834({ value = 834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_834, 'data-value': derived.doubled }, children);
}
export default Component834;
