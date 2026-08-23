import React from 'react';
const LABEL_14392 = 'component_14392';
export function Component14392({ value = 14392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14392, 'data-value': derived.doubled }, children);
}
export default Component14392;
