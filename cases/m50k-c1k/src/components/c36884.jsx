import React from 'react';
const LABEL_36884 = 'component_36884';
export function Component36884({ value = 36884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36884, 'data-value': derived.doubled }, children);
}
export default Component36884;
