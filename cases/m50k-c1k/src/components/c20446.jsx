import React from 'react';
const LABEL_20446 = 'component_20446';
export function Component20446({ value = 20446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20446, 'data-value': derived.doubled }, children);
}
export default Component20446;
