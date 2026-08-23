import React from 'react';
const LABEL_36392 = 'component_36392';
export function Component36392({ value = 36392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36392, 'data-value': derived.doubled }, children);
}
export default Component36392;
