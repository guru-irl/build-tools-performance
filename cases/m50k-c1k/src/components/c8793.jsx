import React from 'react';
const LABEL_8793 = 'component_8793';
export function Component8793({ value = 8793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8793, 'data-value': derived.doubled }, children);
}
export default Component8793;
