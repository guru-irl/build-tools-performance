import React from 'react';
const LABEL_42936 = 'component_42936';
export function Component42936({ value = 42936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42936, 'data-value': derived.doubled }, children);
}
export default Component42936;
