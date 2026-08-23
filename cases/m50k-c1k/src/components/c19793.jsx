import React from 'react';
const LABEL_19793 = 'component_19793';
export function Component19793({ value = 19793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19793, 'data-value': derived.doubled }, children);
}
export default Component19793;
