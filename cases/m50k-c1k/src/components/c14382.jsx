import React from 'react';
const LABEL_14382 = 'component_14382';
export function Component14382({ value = 14382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14382, 'data-value': derived.doubled }, children);
}
export default Component14382;
