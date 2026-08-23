import React from 'react';
const LABEL_46793 = 'component_46793';
export function Component46793({ value = 46793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46793, 'data-value': derived.doubled }, children);
}
export default Component46793;
