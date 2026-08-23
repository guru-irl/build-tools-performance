import React from 'react';
const LABEL_4936 = 'component_4936';
export function Component4936({ value = 4936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4936, 'data-value': derived.doubled }, children);
}
export default Component4936;
