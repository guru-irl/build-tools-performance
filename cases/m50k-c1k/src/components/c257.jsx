import React from 'react';
const LABEL_257 = 'component_257';
export function Component257({ value = 257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_257, 'data-value': derived.doubled }, children);
}
export default Component257;
