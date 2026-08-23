import React from 'react';
const LABEL_8392 = 'component_8392';
export function Component8392({ value = 8392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8392, 'data-value': derived.doubled }, children);
}
export default Component8392;
