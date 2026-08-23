import React from 'react';
const LABEL_8257 = 'component_8257';
export function Component8257({ value = 8257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8257, 'data-value': derived.doubled }, children);
}
export default Component8257;
