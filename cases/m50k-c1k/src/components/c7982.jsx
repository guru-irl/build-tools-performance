import React from 'react';
const LABEL_7982 = 'component_7982';
export function Component7982({ value = 7982, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7982, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7982, 'data-value': derived.doubled }, children);
}
export default Component7982;
