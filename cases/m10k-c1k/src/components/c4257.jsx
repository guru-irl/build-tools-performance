import React from 'react';
const LABEL_4257 = 'component_4257';
export function Component4257({ value = 4257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4257, 'data-value': derived.doubled }, children);
}
export default Component4257;
