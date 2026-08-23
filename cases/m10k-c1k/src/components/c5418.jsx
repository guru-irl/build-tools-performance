import React from 'react';
const LABEL_5418 = 'component_5418';
export function Component5418({ value = 5418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5418, 'data-value': derived.doubled }, children);
}
export default Component5418;
