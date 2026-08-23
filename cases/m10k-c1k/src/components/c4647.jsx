import React from 'react';
const LABEL_4647 = 'component_4647';
export function Component4647({ value = 4647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4647, 'data-value': derived.doubled }, children);
}
export default Component4647;
