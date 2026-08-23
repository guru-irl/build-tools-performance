import React from 'react';
const LABEL_11257 = 'component_11257';
export function Component11257({ value = 11257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11257, 'data-value': derived.doubled }, children);
}
export default Component11257;
