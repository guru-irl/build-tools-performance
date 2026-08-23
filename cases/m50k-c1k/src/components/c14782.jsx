import React from 'react';
const LABEL_14782 = 'component_14782';
export function Component14782({ value = 14782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14782, 'data-value': derived.doubled }, children);
}
export default Component14782;
